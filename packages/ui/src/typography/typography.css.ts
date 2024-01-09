import { type RecipeVariants } from "@vanilla-extract/recipes";

import { componentRecipe } from "../theme/helpers/component-recipe";

const typographyVariants = componentRecipe({
  base: {},
  variants: {},
});

type TypographyVariants = RecipeVariants<typeof typographyVariants>;

export { typographyVariants, type TypographyVariants };
