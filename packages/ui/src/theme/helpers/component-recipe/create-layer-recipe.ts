import { type ComplexStyleRule } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { ensureArray, isClassNames } from "../../../util";

// NOTE: These types are duplicated from `@vanilla-extract/recipes` as they aren't exported.

type RecipeStyleRule = ComplexStyleRule | string;
type VariantDefinitions = Record<string, RecipeStyleRule>;
type BooleanMap<T> = T extends "true" | "false" ? boolean : T;
type VariantGroups = Record<string, VariantDefinitions>;
type VariantSelection<Variants extends VariantGroups> = {
  [VariantGroup in keyof Variants]?: BooleanMap<keyof Variants[VariantGroup]>;
};
type VariantsClassNames<Variants extends VariantGroups> = {
  [P in keyof Variants]: {
    [PP in keyof Variants[P]]: string;
  };
};
interface CompoundVariant<Variants extends VariantGroups> {
  variants: VariantSelection<Variants>;
  style: RecipeStyleRule;
}
type PatternOptions<Variants extends VariantGroups> = {
  base?: RecipeStyleRule;
  variants?: Variants;
  defaultVariants?: VariantSelection<Variants>;
  compoundVariants?: Array<CompoundVariant<Variants>>;
};
type RecipeClassNames<Variants extends VariantGroups> = {
  base: string;
  variants: VariantsClassNames<Variants>;
};
type RuntimeFn<Variants extends VariantGroups> = ((
  options?: VariantSelection<Variants>
) => string) & {
  variants: () => (keyof Variants)[];
  classNames: RecipeClassNames<Variants>;
};

const layerizeRecipeStyleRule = (
  layer: string,
  rule: RecipeStyleRule
): RecipeStyleRule =>
  ensureArray(rule).map((value) =>
    isClassNames(value) ? value : { "@layer": { [layer]: value } }
  );

const createLayerRecipe =
  (layer: string) =>
  <Variants extends VariantGroups>(
    {
      base,
      compoundVariants,
      defaultVariants,
      variants,
    }: PatternOptions<Variants>,
    debugId?: string
  ): RuntimeFn<Variants> =>
    recipe(
      {
        base: base ? layerizeRecipeStyleRule(layer, base) : undefined,
        compoundVariants: compoundVariants
          ? compoundVariants.map(({ style, variants }) => ({
              style: layerizeRecipeStyleRule(layer, style),
              variants,
            }))
          : undefined,
        defaultVariants: defaultVariants,
        variants: variants
          ? (Object.fromEntries(
              Object.entries(variants).map(
                ([variantName, variantDefinition]) => [
                  variantName,
                  Object.fromEntries(
                    Object.entries(variantDefinition).map(
                      ([variationName, variationStyleRule]) => [
                        variationName,
                        layerizeRecipeStyleRule(layer, variationStyleRule),
                      ]
                    )
                  ),
                ]
              )
            ) as unknown as Variants)
          : undefined,
      },
      debugId
    );

export { createLayerRecipe, type CompoundVariant };
