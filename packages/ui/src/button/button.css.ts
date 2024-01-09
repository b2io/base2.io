import { type RecipeVariants } from "@vanilla-extract/recipes";

import {
  backgroundColor,
  color,
  foregroundColor,
} from "../theme/helpers/color";
import { componentRecipe } from "../theme/helpers/component-recipe";
import { focusRing } from "../theme/helpers/focus-ring.css";
import { vars } from "../theme/theme.css";

const buttonVariants = componentRecipe({
  base: [
    focusRing(),
    {
      ":disabled": {
        opacity: "0.5",
        pointerEvents: "none",
      },
      alignItems: "center",
      borderRadius: `calc(${vars.radii.lg} - 2px)`,
      display: "inline-flex",
      justifyItems: "center",
      transitionDuration: "150ms",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      whiteSpace: "nowrap",
    },
  ],
  defaultVariants: { size: "default", variant: "default" },
  variants: {
    size: {
      default: {
        height: vars.space[10],
        paddingBlock: vars.space[2],
        paddingInline: vars.space[4],
      },
      icon: {
        height: vars.space[10],
        width: vars.space[10],
      },
      large: {
        height: vars.space[11],
        paddingInline: vars.space[8],
      },
      small: {
        height: vars.space[9],
        paddingInline: vars.space[3],
      },
    },
    variant: {
      default: {
        ":hover": {
          vars: { [vars.opacity.background]: ".9" },
        },
        backgroundColor: backgroundColor(vars.color.primary),
        color: foregroundColor(vars.color.primaryForeground),
      },
      destructive: {
        ":hover": {
          vars: { [vars.opacity.background]: ".9" },
        },
        backgroundColor: backgroundColor(vars.color.destructive),
        color: foregroundColor(vars.color.destructiveForeground),
      },
      ghost: {
        ":hover": {
          backgroundColor: backgroundColor(vars.color.accent),
        },
        color: foregroundColor(vars.color.accentForeground),
      },
      link: {
        color: foregroundColor(vars.color.primary),
        textDecorationLine: "underline",
        textUnderlineOffset: "4px",
      },
      outline: {
        ":hover": {
          backgroundColor: backgroundColor(vars.color.accent),
          color: foregroundColor(vars.color.accentForeground),
        },
        backgroundColor: backgroundColor(vars.color.background),
        borderColor: color(vars.color.input),
        borderWidth: "2px",
      },
      secondary: {
        ":hover": {
          vars: { [vars.opacity.background]: ".8" },
        },
        backgroundColor: backgroundColor(vars.color.secondary),
        color: foregroundColor(vars.color.secondaryForeground),
      },
    },
  },
});

type ButtonVariants = RecipeVariants<typeof buttonVariants>;

export { buttonVariants, type ButtonVariants };
