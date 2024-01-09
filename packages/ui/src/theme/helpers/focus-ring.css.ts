import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../theme.css";

const ringInset = createVar();
const ringSize = createVar();
const ringOffsetWidth = createVar();
const ringColor = createVar();
const ringOffsetColor = createVar();

const focusRing = recipe({
  base: {
    ":focus-visible": {
      boxShadow: `0 0 0 ${ringOffsetWidth} ${ringOffsetColor}, 0 0 0 calc(${ringSize} + ${ringOffsetWidth}) ${ringColor}`,
      outline: "none",
      outlineOffset: "2px",
    },
  },
  defaultVariants: { color: "default", size: "default" },
  variants: {
    color: {
      default: {
        vars: {
          [ringColor]: `hsl(${vars.color.ring})`,
          [ringOffsetColor]: `hsl(${vars.color.background})`,
        },
      },
    },
    size: {
      default: {
        vars: {
          [ringInset]: "",
          [ringOffsetWidth]: "2px",
          [ringSize]: "2px",
        },
      },
    },
  },
});

export { focusRing };
