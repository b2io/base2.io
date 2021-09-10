import { css } from '@emotion/react';
import React, { Children, cloneElement, FC, ReactElement } from 'react';

import {
  DynamicIcon,
  DynamicIconProps,
  Heading,
  Link,
  Text,
} from '~/components';
import { atMinTablet, spacing } from '~/theme';

export const CardHeading: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardContent: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const CardActions: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const Card: FC = ({ children, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${spacing.sm};
      `}
      {...props}
    >
      {children}
    </div>
  );
};

<Card>
  <Heading as="h1" color="coral" variant="h1">
    This is a card hading
  </Heading>
  <Text>This is some text for the card content.</Text>
</Card>;

export type StatCardProps = {
  heading: string;
  text: string;
};

export const StatCard: FC<StatCardProps> = ({ heading, text }) => {
  const [highlight, ...remainder] = heading.split(' ');
  return (
    <Card>
      <Heading as="h3" color="coral" variant="h1">
        {highlight}
        <br />
        <Text as="span" variant="h2">
          {remainder.join(' ')}
        </Text>
      </Heading>
      <Text>{text}</Text>
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
      <Text>{text}</Text>
    </Card>
  );
};

<Card>
  <DynamicIcon type="business" />
  <Heading as="h3" color="coral" variant="h3">
    Business
  </Heading>
  <Text>This is some text for the card content.</Text>
</Card>;

<Card>
  <Heading as="h3" color="coral" variant="h3">
    Business
  </Heading>
  <Text>This is some text for the card content.</Text>
  <Link variant="CTA" href="/">
    Read more
  </Link>
</Card>;

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
