import { css } from '@emotion/react';
import React, {
  Children,
  cloneElement,
  ElementType,
  FC,
  ReactElement,
} from 'react';

import {
  DynamicIcon,
  DynamicIconProps,
  Heading,
  Link,
  Text,
} from '~/components';
import { atMinTablet, colors, spacing } from '~/theme';

export const CardHeading: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardContent: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardActions: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export type CardProps = {
  as?: ElementType;
};

export const Card: FC<CardProps> = ({
  as: Component = 'div',
  children,
  ...props
}) => {
  return (
    <Component
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${spacing.xs};
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export type ResultCardProps = {
  heading: string;
  text: string;
};

export const ResultCard: FC<ResultCardProps> = ({ heading, text }) => {
  const [highlight, ...remainder] = heading.split(' ');

  return (
    <Card
      css={css`
        &::before {
          background: ${colors.lightBlue};
          content: ' ';
          display: block;
          height: 0.25rem;
          width: 2.5rem;
        }
      `}
    >
      <Heading as="h3" color="coral" variant="h1">
        {highlight}
        <br />
        <Text
          as="span"
          css={css`
            display: block;
          `}
          variant="h2"
        >
          {remainder.join(' ')}
        </Text>
      </Heading>
      <Text
        as="p"
        css={css`
          margin: 0;
        `}
      >
        {text}
      </Text>
    </Card>
  );
};

export type IconCardProps = {
  heading: string;
  icon: DynamicIconProps['type'];
  text: string;
};

export const IconCard: FC<IconCardProps> = ({ heading, icon, text }) => {
  return (
    <Card>
      <DynamicIcon type={icon} />
      <Heading as="h3" color="coral" variant="h3">
        {heading}
      </Heading>
      <Text
        as="p"
        css={css`
          margin: 0;
        `}
      >
        {text}
      </Text>
    </Card>
  );
};

export type BlogCardProps = {
  heading: string;
  text: string;
  href: string;
  linkText: string;
};

export const BlogCard: FC<BlogCardProps> = ({
  heading,
  href,
  linkText,
  text,
}) => {
  return (
    <Card>
      <Heading as="h3" color="coral" variant="h3">
        {heading}
      </Heading>
      <Text
        as="p"
        css={css`
          margin: 0;
          margin-bottom: ${spacing.lg};
        `}
      >
        {text}
      </Text>
      <Link
        css={css`
          width: fit-content;
        `}
        href={href}
        variant="CTA"
      >
        {linkText}
      </Link>
    </Card>
  );
};

export const CardGrid: FC = ({ children, ...props }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-row-gap: 4rem;
        justify-content: space-between;
        list-style: none;
        margin: 0 auto;
        max-width: 67rem;
        padding: 0;

        ${atMinTablet} {
          grid-column-gap: 4rem;
          grid-template-columns: repeat(2, minmax(20rem, 35rem));
        }
      `}
      {...props}
    >
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, { as: 'li' }),
      )}
    </ul>
  );
};
