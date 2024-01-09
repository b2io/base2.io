import { sprinkles, type Sprinkles } from "./sprinkles.css";

type WithoutSprinkles<T extends Record<string, unknown>> = Omit<
  T,
  keyof Sprinkles
>;

const partitionSprinkles = <T extends Sprinkles>(
  props: T
): [Sprinkles, WithoutSprinkles<T>] => {
  const sprinklesProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  }

  return [sprinklesProps, otherProps as WithoutSprinkles<T>];
};

export { partitionSprinkles, type WithoutSprinkles };
