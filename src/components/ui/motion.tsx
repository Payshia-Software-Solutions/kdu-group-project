
"use client";

import { motion, Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
  variants?: Variants;
  className?: string;
};

export function MotionDiv({ children, variants = defaultVariants, className }: MotionDivProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
