import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useIntersectionAnimation(threshold: number, animationCallback: unknown) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  
  useEffect(() => {
    // eslint-disable-next-line
    //@ts-ignore
    animationCallback(inView);
  }, [inView, animationCallback]);

  return ref;
}