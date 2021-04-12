import css from '@emotion/css';
import { FC } from 'react';
import Image from 'next/image';
import { Heading, Text } from '~/components';

export const DesignedForHumansPane: FC = () => {
  return (
    <div>
      <div
        css={css`
          height: 86.133vw;
          left: calc(50% - 50vw);
          position: relative;
          width: 86.133vw;
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
