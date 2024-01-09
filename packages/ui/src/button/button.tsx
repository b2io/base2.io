import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";

import { buttonVariants, type ButtonVariants } from "./button.css";
import { partitionSprinkles, sprinkles, type Sprinkles } from "../sprinkles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
} & ButtonVariants &
  Sprinkles;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, size, variant, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    const [sprinklesProps, nativeProps] = partitionSprinkles(props);

    return (
      <Component
        {...nativeProps}
        className={clsx(
          buttonVariants({ size, variant }),
          sprinkles(sprinklesProps),
          className
        )}
        ref={ref}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, type ButtonProps };
