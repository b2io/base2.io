import { type ComplexStyleRule, style } from "@vanilla-extract/css";

import { ensureArray, isClassNames } from "../../../util";

export const createLayerStyle =
  (layer: string) => (rule: ComplexStyleRule, debugId?: string) =>
    style(
      ensureArray(rule).map((value) =>
        isClassNames(value) ? value : { "@layer": { [layer]: value } }
      ),
      debugId
    );
