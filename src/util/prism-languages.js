import Prism from 'prism-react-renderer/prism';

/*
 * Include additional languages for syntax highlighting not provided by
 * default. The list of included languages is here:
 * https://github.com/FormidableLabs/prism-react-renderer/blob/v1.0.2/src/vendor/prism/includeLangs.js
 */

(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/plugins/diff-highlight/prism-diff-highlight');
require('prismjs/components/prism-ruby');
require('prism-svelte');
