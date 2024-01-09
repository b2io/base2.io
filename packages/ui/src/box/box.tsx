import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";

import { partitionSprinkles, sprinkles, type Sprinkles } from "../sprinkles";

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
} & Sprinkles;

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : "div";
    const [sprinklesProps, nativeProps] = partitionSprinkles(props);

    return (
      <Component
        {...nativeProps}
        className={clsx(sprinkles(sprinklesProps), className)}
        ref={ref}
      />
    );
  }
);
Box.displayName = "Box";

export { Box, type BoxProps };
