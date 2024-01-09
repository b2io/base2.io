import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

import { typographyVariants, type TypographyVariants } from "./typography.css";
import {
  partitionSprinkles,
  type Sprinkles,
  sprinkles,
  type WithoutSprinkles,
} from "../sprinkles";

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "em"
  | "strong"
  | "code"
  | "p"
  | "q";

type TypographyProps<TElement extends TypographyElement> = Sprinkles &
  WithoutSprinkles<ComponentPropsWithoutRef<TElement>> & {
    asChild?: boolean;
  } & TypographyVariants;

function makeTypography<TElement extends TypographyElement>(
  element: TElement,
  displayName: string
) {
  const Component = forwardRef<ElementRef<TElement>, TypographyProps<TElement>>(
    ({ asChild, className, ...props }, ref) => {
      const Component = asChild ? Slot : element;
      const [sprinklesProps, nativeProps] = partitionSprinkles(props);

      return (
        // @ts-expect-error The compiler can't figure out the ref type properly internally, but the external types are correct.
        <Component
          {...nativeProps}
          className={clsx(
            typographyVariants({}),
            sprinkles(sprinklesProps),
            className
          )}
          ref={ref}
        />
      );
    }
  );
  Component.displayName = displayName;

  return Component;
}

const Heading1 = makeTypography("h1", "Heading1");
type Heading1Props = TypographyProps<"h1">;

const Heading2 = makeTypography("h1", "Heading2");
type Heading2Props = TypographyProps<"h1">;

const Heading3 = makeTypography("h1", "Heading3");
type Heading3Props = TypographyProps<"h1">;

const Heading4 = makeTypography("h1", "Heading4");
type Heading4Props = TypographyProps<"h1">;

const Heading5 = makeTypography("h1", "Heading5");
type Heading5Props = TypographyProps<"h1">;

const Heading6 = makeTypography("h1", "Heading6");
type Heading6Props = TypographyProps<"h1">;

const Paragraph = makeTypography("p", "Paragraph");
type ParagraphProps = TypographyProps<"p">;

const Quote = makeTypography("q", "Quote");
type QuoteProps = TypographyProps<"q">;

const Emphasis = makeTypography("em", "Emphasis");
type EmphasisProps = TypographyProps<"em">;

const Strong = makeTypography("strong", "Strong");
type StrongProps = TypographyProps<"strong">;

const Code = makeTypography("code", "Code");
type CodeProps = TypographyProps<"code">;

export {
  Heading1,
  type Heading1Props,
  Heading2,
  type Heading2Props,
  Heading3,
  type Heading3Props,
  Heading4,
  type Heading4Props,
  Heading5,
  type Heading5Props,
  Heading6,
  type Heading6Props,
  Paragraph,
  type ParagraphProps,
  Quote,
  type QuoteProps,
  Emphasis,
  type EmphasisProps,
  Strong,
  type StrongProps,
  Code,
  type CodeProps,
  type TypographyProps,
};
