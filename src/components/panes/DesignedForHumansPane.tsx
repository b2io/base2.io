import css from '@emotion/css';
import Image from 'next/image';
import { FC } from 'react';
import { Heading, Text } from '~/components';
import { cssClamp } from '~/theme';

export const DesignedForHumansPane: FC = () => {
  return (
    <div>
      <div
        css={css`
          height: ${cssClamp([20.188, 'xs'], [26.625, 'md'], [50, 'lg'])};
          left: calc(50% - 50vw - ${cssClamp([5.8545, 'xs'], [0, 'md'])});
          position: relative;
          width: ${cssClamp([26.042, 'xs'], [34.313, 'md'], [64.5, 'lg'])};
        `}
      >
        <Image
          layout="fill"
          alt="woman looking at phone"
          src="/home/humans.jpg"
        />
      </div>
      <Heading as="h2" variant="h2">
        Designed for{' '}
        <Text as="span" variant="hero">
          humans.
        </Text>
      </Heading>
    </div>
  );
};

export default DesignedForHumansPane;
