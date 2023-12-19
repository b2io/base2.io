import { css } from '@emotion/react';
<<<<<<< HEAD
import styled from '@emotion/styled';
=======
>>>>>>> main
import {
  Children,
  cloneElement,
  ElementType,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react';

import {
  DynamicIcon,
  DynamicIconProps,
  Heading,
  Link,
  Text,
} from '~/components';
import { atMaxSm, atMinTablet, colors, spacing } from '~/theme';

export const CardHeading: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardContent: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardActions: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export type CardProps = {
  as?: ElementType;
  id?: string;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({
  as: Component = 'div',
  children,
  id,
  ...props
}) => {
  return (
    <Component
      id={id}
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
      <Heading
        as="h3"
        color="coral"
        variant="h1"
        css={css`
          ${atMaxSm} {
            font-size: 3.5rem;
          }
        `}
      >
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
          ${atMaxSm} {
            max-width: 21.875rem;
          }
        `}
      >
        {text}
      </Text>
    </Card>
  );
};

export type IconCardProps = {
  children?: React.ReactNode;
  heading: string;
  icon: DynamicIconProps['type'];
  id?: string;
  text: string;
};

export const IconCard: FC<IconCardProps> = ({
  children,
  heading,
  icon,
  id,
  text,
  ...props
}) => {
  return (
    <Card id={id} {...props}>
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
      {children}
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

export type BasicCardProps = {
  heading: string;
  text: string;
};

export const BasicCard: FC<BasicCardProps> = ({ heading, text }) => {
  return (
    <Card>
      <Heading as="h2" variant="h2">
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

<<<<<<< HEAD
const StyledListItem = styled.li`
  margin-top: ${spacing.xxxs};
  padding: 0 ${spacing.md};
  position: relative;

  ::before {
    border-bottom: solid 1px ${colors.coral};
    content: '';
    left: 0;
    position: absolute;
    top: 0.925rem;
    width: 1.125rem;
  }
`;

export type ServiceCardProps = {
  details: Array<string>;
  heading: string;
  id: string;
  text: string;
};

export const ServiceCard: FC<ServiceCardProps> = ({
  details,
  heading,
  id,
  text,
  ...props
}) => {
  return (
    <Card id={id} {...props}>
      <Heading as="h4" variant="serviceTitle">
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
      <ul
        css={css`
          list-style: none;
          line-height: 1.75;
        `}
      >
        {details.map((detail, index) => (
          <StyledListItem key={`detail=${index + 1}`}>{detail}</StyledListItem>
        ))}
      </ul>
    </Card>
  );
};

=======
>>>>>>> main
export const CardGrid: FC<PropsWithChildren> = ({ children, ...props }) => {
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
