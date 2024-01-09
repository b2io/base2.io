import { type ElementRef, forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import {
  Heading3,
  type Heading3Props,
  Paragraph,
  type ParagraphProps,
} from "../typography";

const Card = forwardRef<ElementRef<typeof Box>, BoxProps>(
  ({ className, ...props }, ref) => (
    <Box
      bg="card"
      borderRadius="lg"
      borderWidth={1}
      boxShadow="sm"
      className={className}
      color="cardForeground"
      ref={ref}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = forwardRef<ElementRef<typeof Box>, BoxProps>(
  ({ className, ...props }, ref) => (
    <Box
      {...props}
      className={className}
      display="flex"
      flexDirection="column"
      gap={1.5}
      p={6}
      ref={ref}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<ElementRef<typeof Heading3>, Heading3Props>(
  ({ className, ...props }, ref) => {
    return (
      <Heading3
        className={className}
        fontSize="2xl"
        fontWeight="semibold"
        leading="none"
        ref={ref}
        tracking="tight"
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  ElementRef<typeof Paragraph>,
  ParagraphProps
>(({ className, ...props }, ref) => (
  <Paragraph
    className={className}
    color="mutedForeground"
    fontSize="sm"
    lineHeight="tight"
    ref={ref}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<ElementRef<typeof Box>, BoxProps>(
  ({ className, ...props }, ref) => (
    <Box className={className} p={6} pt={0} ref={ref} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<ElementRef<typeof Box>, BoxProps>(
  ({ className, ...props }, ref) => (
    <Box
      className={className}
      display="flex"
      p={6}
      placeItems="center"
      pt={0}
      ref={ref}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
