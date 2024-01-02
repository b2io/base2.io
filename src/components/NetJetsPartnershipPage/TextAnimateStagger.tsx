import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { Text } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

interface TextAnimateStaggerProps {
  text: string;
  elemType: keyof JSX.IntrinsicElements;
  index: number;
}

const defaultAnimations = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const TextAnimateStagger: FC<TextAnimateStaggerProps> = ({
  text,
  index,
}) => {
  return (
    <motion.div>
      <Text
        css={css`
          display: block;
          left: 2rem;
          position: relative;

          ${atMinTablet} {
            left: ${cssClamp([1.75, 'tablet'], [8.25, 'xl'])};
          }
        `}
      >
        <span
          hidden
          css={css`
            display: none;
          `}
        >
          {text}
        </span>
        <motion.span initial="hidden" animate="show">
          {text.split('').map((char) => (
            <motion.span
              // css={css`
              //   border: 2px solid pink;
              // `}
              key={index}
              transition={{ staggerChildren: 0.1 }}
              variants={defaultAnimations}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </Text>
    </motion.div>
  );
};
