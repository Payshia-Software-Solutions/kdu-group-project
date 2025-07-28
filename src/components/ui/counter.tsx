
"use client";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp, type CountUpProps } from 'react-countup';

type CounterProps = {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export function Counter({ end, duration = 2, prefix = "", suffix = "", className }: CounterProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { countUp, start } = useCountUp({
    start: 0,
    end,
    duration,
    prefix,
    suffix,
    separator: ",",
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return <span ref={ref} className={className}>{countUp}</span>;
}
