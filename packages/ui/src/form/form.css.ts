import { vars } from "../theme";
import { color } from "../theme/helpers/color";
import { componentRecipe } from "../theme/helpers/component-recipe";
import { componentStyle } from "../theme/helpers/component-style";

const formItem = componentStyle({
  display: "flex",
  flexDirection: "column",
  rowGap: vars.space[2],
});

const formLabel = componentRecipe({
  variants: {
    error: {
      true: { color: color(vars.color.destructiveForeground) },
    },
  },
});

const formDescription = componentStyle({
  color: color(vars.color.mutedForeground),
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

const formMessage = componentStyle({
  color: color(vars.color.destructiveForeground),
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: "1.25rem",
});

export { formDescription, formLabel, formItem, formMessage };
