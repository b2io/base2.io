import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";

import { createLayerStyle } from "./create-layer-style";
import { layers } from "../../layers.css";

/**
 * Wrapper around `vanilla-extract`'s `style` API that attaches the underlying styles to the `components` CSS Layer.
 * @see {@link https://vanilla-extract.style/documentation/api/style/ Style API}
 */
const componentStyleFn = createLayerStyle(layers.components);

const componentStyle = addFunctionSerializer(componentStyleFn, {
  args: [],
  importName: "createLayerStyle",
  importPath: "./createLayerStyle",
});

export { componentStyle };
