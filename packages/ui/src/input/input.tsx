import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

import * as styles from "./input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        {...props}
        className={clsx(styles.input, className)}
        ref={ref}
        type={type}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, type InputProps };
