import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useIntersectionAnimation(threshold, animationCallback) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    animationCallback(inView);
  }, [inView, animationCallback]);

  return ref;
}