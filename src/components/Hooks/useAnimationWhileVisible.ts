import { useAnimation } from 'framer-motion';
import type {
  AnimationControls,
  ControlsAnimationDefinition,
} from 'framer-motion/types/animation/types';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

export const useAnimationWhileVisible = (
  animation: ControlsAnimationDefinition,
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
