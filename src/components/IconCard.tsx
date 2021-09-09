import { css } from '@emotion/react';
import { Children, cloneElement, ElementType, FC, ReactElement } from 'react';

import { DynamicIcon, DynamicIconProps, Heading, Text } from '~/components';
import { atMinTablet, spacing } from '~/theme';

export type IconCardProps<E extends ElementType = ElementType> = {
  as?: E;
  icon: DynamicIconProps['type'];
  heading: string;
};

export const IconCard: FC<IconCardProps> = ({
  as: Component = 'div',
  children,
  icon,
  heading,
  ...props
}) => {
  return (
    <Component {...props}>
      <DynamicIcon
        css={css`
          height: 3rem;
          margin-bottom: ${spacing.xxs};
          width: auto;
        `}
        type={icon}
      />
      <Heading
        as="h3"
        color="coral"
        variant="h3"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        {heading}
      </Heading>
      <Text
        as="p"
        css={css`
          margin: 0;
        `}
      >
        {children}
      </Text>
    </Component>
  );
};

export type IconCardGridProps = {
  children: ReactElement<IconCardProps>[];
};

export const IconCardGrid: FC<IconCardGridProps> = ({ children, ...props }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-row-gap: 4rem;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        max-width: 67rem;
        padding: 0;

        ${atMinTablet} {
          grid-column-gap: 1.875rem;
          grid-template-columns: repeat(2, minmax(20rem, 30rem));
        }
      `}
      {...props}
    >
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<IconCardProps>, { as: 'li' }),
      )}
    </ul>
  );
};
