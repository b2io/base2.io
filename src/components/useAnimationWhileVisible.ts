import { useAnimation } from 'framer-motion';
import type { AnimationControls, AnimationDefinition } from 'framer-motion';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

export const useAnimationWhileVisible = (
  animation: AnimationDefinition,
  options: IntersectionObserverInit,
): [MutableRefObject<null>, AnimationControls] => {
  const ref = useRef(null);
  const inView = useIntersection(ref, options)?.isIntersecting ?? false;
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(animation);
    } else {
      controls.stop();
    }

    return controls.stop;
  }, [animation, controls, inView]);

  return [ref, controls];
};
