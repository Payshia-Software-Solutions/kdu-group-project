
"use client";

import { motion, Variants } from "framer-motion";

const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

type MotionContainerProps = {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
};

export function MotionContainer({ children, stagger = 0.1, className }: MotionContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

type MotionDivProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
};

export function MotionDiv({ children, direction = "left", className }: MotionDivProps) {
  const variants = direction === 'left' ? slideInFromLeft : slideInFromRight;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
