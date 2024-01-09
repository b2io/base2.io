"use client";

import { Label as LabelPrimitive } from "@radix-ui/react-label";
import clsx from "clsx";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

import * as styles from "./label.css";

const Label = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...props }, ref) => (
  <LabelPrimitive
    {...props}
    className={clsx(styles.label, className)}
    ref={ref}
  />
));
Label.displayName = LabelPrimitive.displayName;

export { Label };
