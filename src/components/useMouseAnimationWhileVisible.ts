import {
  MotionValue,
  transform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import type { SpringOptions } from 'popmotion';
import { RefObject, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

export const useMouseAnimationWhileVisible = <T extends HTMLElement>(
  config: SpringOptions,
  options: IntersectionObserverInit,
): [
  RefObject<T>,
  {
    point: MotionValue<number[]>;
    x: MotionValue<number>;
    y: MotionValue<number>;
  },
] => {
  const ref = useRef<T>(null);
  const x = useSpring(0, config);
  const y = useSpring(0, config);
  const point = useMotionValue([0, 0]);
  const inView = useIntersection(ref, options)?.isIntersecting ?? false;

  useEffect(() => {
    const unsubX = x.onChange((value) => {
      point.set([value, point.get()[1]]);
    });
    const unsubY = y.onChange((value) => {
      point.set([point.get()[0], value]);
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, [point, x, y]);

  useEffect(() => {
    if (inView) {
      const updatePosition = (position: { pageX: number; pageY: number }) => {
        if (position && ref.current) {
          const {
            height,
            left,
            top,
            width,
          } = ref.current.getBoundingClientRect();

          // Transform the mouse position to a range of [-1, 1], [-1, 1] where 0,0 is the center of the reference element.
          const elX = position.pageX - (left + window.pageXOffset);
          const clampedX = Math.max(0, Math.min(elX, width));
          const elY = position.pageY - (top + window.pageYOffset);
          const clampedY = Math.max(0, Math.min(elY, height));
          x.set(transform(clampedX, [0, width], [-1, 1]));
          y.set(transform(clampedY, [0, height], [-1, 1]));
        }
      };

      const handleMouseMove = (event: MouseEvent) => {
        updatePosition(event);
      };

      const handleTouchMove = (event: TouchEvent) => {
        const lastTouch = event.touches.item(event.touches.length - 1);

        if (lastTouch) {
          updatePosition(lastTouch);
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [inView]);

  return [ref, { point, x, y }];
};
