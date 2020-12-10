---
title: Server-Side Rendering with Svelte
author: nkessler
date: "2020-12-12"
path: "/2020/12/12/svelte-ssr"
---

Svelte is gaining popularity in the frontend community due to its advantages over existing approaches to building and shipping frontend applications. One advantage of Svelte is the ease of using the same components to render server-side or client-side. This guide will explore how to take full advantage of Server Side Rendering (SSR) in Svelte and allow the same components to be used with SSR or client-side rendering.

Visit the [Svelte homepage](https://svelte.dev/) for more information on Svelte.

## The end goal

The demo component will list random recipes from [Recipe Puppy](http://www.recipepuppy.com/). The application will be rendered both client-side and server-side. Once basic SSR and CSR is working, we'll explore how to add interactivity after rendering server-side, then look at how SSR can break when using features not supported by Node and how to work around the problem.

The full source for each step in this guide is available [here](https://github.com/b2io/svelte-ssr-demo).

## Rendering a client-side widget server-side

First, build a Svelte component to render the recipes:

```svelte
<script>
	let recipes = null;

  fetch("http://localhost:8080/api/")
    .then((response) => response.json())
    .then((json) => (recipes = json.results));
</script>

<main>
	{#if recipes === null}
		<div>Loading...</div>
	{:else}
	<ul>
		{#each recipes as recipe} 
			<a href={recipe.href}>
              <img
                src='{recipe.thumbnail}'
                alt='Thumbnail for {recipe.title}' />
              <div class='label'>{recipe.title}</div>
			</a>
		{/each}
		</ul>
	{/if}
</main>
```

Great! The component is retrieving a list of recipes and rendering them in the browser.

![demo](https://i.imgur.com/BEEazdv.png)

The same component can be used for SSR with minor changes. To render this component server-side, the component must also accept the list of recipes as a prop and disable making the request if the recipes are provided.

```diff
- 	let recipes = null;
+ 	export let recipes = null;
 
    $: {
-     fetch("http://localhost:8080/api/")p
+     !recipes && fetch("http://localhost:8080/api/")
        .then((response) => response.json())
        .then((json) => (recipes = json.results));
    }
```

The component can now be used for SSR. Adding `require('svelte/register');` to a Node script allows us to import and render a Svelte component directly in Node. Pass the incoming `recipe` prop in object passed to the `render` function.

```js
require("svelte/register");
const App = require("../src/App.svelte").default;

// Retrieve list of recipes

const { html, css } = App.render({
  recipes
});
```

The rendered HTML and CSS can be injected into your HTML page. Click [here](https://github.com/b2io/svelte-ssr-demo/blob/main/1-basic-ssr/scripts/ssr-server.js) for the source to an Express server demo. The full source for this step is available [here](https://github.com/b2io/svelte-ssr-demo/tree/main/1-basic-ssr).

## Adding interactivity

The above approach is viable for this basic component because the list has no interactive elements. Once the list is rendered, the component stops making changes to the DOM. To support client-side interactivity after the component is rendered server-side, a few changes need to be made to the build and rendering process.

Make the component interactive by adding toggleable ingredient display.

```svelte
<script>
  ...
  let showIngredients = false
  ...
</script>

...
<label>
  <input type=checkbox bind:checked={showIngredients}/>
  Show Ingredients
</label>
<ul>
{#each recipes as recipe} 
  <a href={recipe.href}>
    <img 
      src='{recipe.thumbnail}'
      alt='Thumbnail for {recipe.title}' />
    <div class='wrapper'>
      <div>{recipe.title}</div>
      {#if showIngredients}
        <div class='ingredients'>{recipe.ingredients}</div>
      {/if}
    </div>
  </a>
{/each}
</ul>
...
```

When the client initializes the component after it is rendered by the server, it is preferable to prevent redrawing the screen by re-use the existing DOM nodes instead than remove and replace them. This process is called hydration and must be enabled at the compilation stage. Add `hydratable: true` to the Svelte compiler options to enable client-side hydration.

```diff
svelte({
  compilerOptions: {
    dev: true,
+   hydratable: true
  }
}),
```

The data must also be available to the client-side component. If recipe data isn't available to the client-side component when it initializes, it will make a request and show `Loading...`, defeating the purpose of SSR! This can be avoided by adding the data to a global variable during SSR and injecting that into the component during initialization.

Along with injecting the rendered component, we can set `window.__RECIPES__` to the recipe data by injecting a `script` into the response.

```html
<script>window.__RECIPES__=${JSON.stringify(recipes)}</script>
```

Finally, edit `main.js` to use the global variable to bootstrap the component and enable hydration.

```diff
const app = new App({
	target: document.body,
+	hydrate: true,
	props: {
+   	recipes: window.__RECIPES__
	}
});
```

Ensure the client-side Javascript is included in the response from the SSR server by adding `<script defer src='/build/bundle.js'></script>` and success! The client-side Javascript can now rehydrate the pre-rendered component and add reactivity. The full source for this demo is available [here](https://github.com/b2io/svelte-ssr-demo/tree/main/2-interactivity).

## Breaking things with `import` and Typescript

In the previous examples the Svelte component was compiled into a usable component by registering the Svelte compiler with Node, allowing `.svelte` components to be directly imported. Because the components are compiled when imported, features are limited to those supported by Node and the Svelte compiler. To support `import`ing other Javascript files or using Typescript, use Rollup to produce a bundled SSR component.

Copy the existing `rollup.config.js` to `rollup.ssr.config.js`. Change the entry point to component and the output to unique filenames and the `umd` format usable by Node. 

```diff
-	input: 'src/main.js',
+	input: 'src/App.svelte',
	output: {
		sourcemap: true,
-		format: 'iife',
+		format: 'umd',
		name: 'app',
-		file: 'public/build/bundle.js'
+		file: 'public/build/ssr.js',
		name: 'app',
	},
```

Configure the compiler to generate a component for SSR. `hydratable` can be removed because it doesn't apply to SSR.

```diff
  compilerOptions: {
    dev: true,
-	  hydratable: true
+     generate: "ssr"
  }
```

Separate the CSS for SSR and remove the dev server:

```diff
- css({ output: 'bundle.css' }),
+ css({ output: 'ssr.css' }),
-	dev({
-		dirs: ['public'],
-		proxy: { '/api': 'http://www.recipepuppy.com/api/'},
-	}),
```

For the final changes to the rollup configuration, remove the live reload plugin.

```diff
- livereload('public'),
```

Add a script to `package.json` to generate the SSR component:

```diff
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
+   "ssr": "rollup --config rollup.ssr.config.js"
  },
```

Our Rollup configuration is all set for generating an SSR component. After running `yarn ssr` the file generated in `public/build/ssr.js` can be imported by Node and used to generate the SSR component as before. To use the generated SSR component, change the import and remove `.default`:

```diff
- require("svelte/register");
- const App = require("../src/App.svelte").default;
+ const App = require("../public/build/ssr.js")
```

Done! Since Rollup is bundling the SSR component for Node, `import`ing Javascript files is now supported and other Rollup plugins such as Typescript can be added.

The full source to the final demo is available [here](https://github.com/b2io/svelte-ssr-demo/tree/main/3-typescript-and-imports).
