
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

function ClientOnlyCounter({ end, duration = 2, prefix = "", suffix = "", className }: CounterProps) {
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

  const { countUp, start } = useCountUp(countUpProps);

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return <span ref={ref} className={className}>{countUp}</span>;
}


export function Counter({ end, duration = 2, prefix = "", suffix = "", className }: CounterProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <span className={className}>{prefix}{end.toLocaleString()}{suffix}</span>;
  }

  return <ClientOnlyCounter end={end} duration={duration} prefix={prefix} suffix={suffix} className={className} />;
}
