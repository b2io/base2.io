import { vars } from "../theme";
import { color } from "../theme/helpers/color";
import { componentStyle } from "../theme/helpers/component-style";
import { focusRing } from "../theme/helpers/focus-ring.css";

const input = componentStyle([
  focusRing(),
  {
    "::file-selector-button": {
      borderColor: "transparent",
      borderWidth: 0,
      fontSize: ".875rem",
      fontWeight: 500,
      lineHeight: "1.25rem",
    },
    "::placeholder": {
      color: color(vars.color.mutedForeground),
    },
    ":disabled": {
      cursor: "not-allowed",
      opacity: "50%",
    },
    backgroundColor: color(vars.color.background),
    borderColor: color(vars.color.input),
    borderRadius: vars.radii.md,
    borderWidth: "1px",
    display: "flex",
    fontSize: ".875rem",
    height: vars.space[10],
    lineHeight: "1.25rem",
    paddingBlock: vars.space[2],
    paddingInline: vars.space[3],
    width: "100%",
  },
]);

export { input };
