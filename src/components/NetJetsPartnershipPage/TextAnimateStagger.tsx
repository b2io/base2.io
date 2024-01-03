import { css } from '@emotion/react';
import { motion, useInView } from 'framer-motion';
import { type FC, useRef } from 'react';

import { Text, TextProps } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

interface TextAnimateStaggerProps extends TextProps {
  text: string;
  index: number;
  once?: boolean;
}

const defaultAnimations = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const TextAnimateStagger: FC<TextAnimateStaggerProps> = ({
  text,
  index,
  once,
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  return (
    <motion.div>
      <Text
        {...rest}
        css={css`
          display: block;
          left: 2rem;
          position: relative;
          margin-top: 45em;

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
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          transition={{ staggerChildren: 0.008 }}
          aria-hidden
        >
          {text.split('').map((char) => (
            <motion.span key={index} variants={defaultAnimations}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </Text>
    </motion.div>
  );
};
