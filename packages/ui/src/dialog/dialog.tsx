"use client";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import {
  Dialog,
  DialogClose,
  DialogPortal,
  DialogTrigger,
  DialogContent as PrimitiveContent,
  DialogDescription as PrimitiveDescription,
  DialogOverlay as PrimitiveOverlay,
  DialogTitle as PrimitiveTitle,
} from "@radix-ui/react-dialog";
import clsx from "clsx";
import { X } from "lucide-react";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
} from "react";

import * as styles from "./dialog.css";
import { sprinkles } from "../sprinkles";

const DialogOverlay = forwardRef<
  ElementRef<typeof PrimitiveOverlay>,
  ComponentPropsWithoutRef<typeof PrimitiveOverlay>
>(({ className, ...props }, ref) => (
  <PrimitiveOverlay
    {...props}
    className={clsx(styles.dialogOverlay, className)}
    ref={ref}
  />
));
DialogOverlay.displayName = PrimitiveOverlay.displayName;

const DialogContent = forwardRef<
  ElementRef<typeof PrimitiveContent>,
  ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ children, className, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <PrimitiveContent
      {...props}
      className={clsx(styles.dialogContent, className)}
      ref={ref}
    >
      {children}
      <DialogClose className={styles.dialogClose}>
        <AccessibleIcon label="Close">
          <X className={clsx(sprinkles({ h: 4, w: 4 }))} />
        </AccessibleIcon>
      </DialogClose>
    </PrimitiveContent>
  </DialogPortal>
));
DialogContent.displayName = PrimitiveContent.displayName;

function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.dialogHeader, className)} />;
}

function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.dialogFooter, className)} />;
}

const DialogTitle = forwardRef<
  ElementRef<typeof PrimitiveTitle>,
  ComponentPropsWithoutRef<typeof PrimitiveTitle>
>(({ className, ...props }, ref) => (
  <PrimitiveTitle
    {...props}
    className={clsx(styles.dialogTitle, className)}
    ref={ref}
  />
));
DialogTitle.displayName = PrimitiveTitle.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof PrimitiveDescription>,
  ComponentPropsWithoutRef<typeof PrimitiveDescription>
>(({ className, ...props }, ref) => (
  <PrimitiveDescription
    {...props}
    className={clsx(styles.dialogDescription, className)}
    ref={ref}
  />
));
DialogDescription.displayName = PrimitiveDescription.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
