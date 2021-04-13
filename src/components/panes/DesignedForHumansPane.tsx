import css from '@emotion/css';
import { FC } from 'react';
import Image from 'next/image';
import { Heading, Text } from '~/components';

export const DesignedForHumansPane: FC = () => {
  return (
    <div>
      <div
        css={css`
          height: 20.1875em;
          left: calc(50% - 50vw - 5.8545em);
          position: relative;
          width: 26.042em;
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
