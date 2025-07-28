
"use client";

import { useEffect, useState } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const countUpProps: CountUpProps = {
    start: 0,
    end,
    duration,
    prefix,
    suffix,
    separator: ",",
  };

  const { countUp, start, update } = useCountUp(countUpProps);

  useEffect(() => {
    if (inView && isMounted) {
      start();
    }
  }, [inView, isMounted, start]);
  
  useEffect(() => {
    if(isMounted) {
        update(end);
    }
  }, [end, update, isMounted]);

  if (!isMounted) {
    return <span className={className}>{prefix}{end}{suffix}</span>;
  }

  return <span ref={ref} className={className}>{countUp}</span>;
}
