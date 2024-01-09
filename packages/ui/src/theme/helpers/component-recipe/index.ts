import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";

import { createLayerRecipe } from "./create-layer-recipe";
import { layers } from "../../layers.css";

const componentRecipeFn = createLayerRecipe(layers.components);

/**
 * Wrapper around `vanilla-extract`'s `recipe` API that attaches the underlying styles to the `components` CSS Layer.
 * @see {@link https://vanilla-extract.style/documentation/packages/recipes/ Recipe API}
 */
const componentRecipe = addFunctionSerializer(componentRecipeFn, {
  args: [],
  importName: "createLayerRecipe",
  importPath: "createLayerRecipe",
});

export { componentRecipe };
