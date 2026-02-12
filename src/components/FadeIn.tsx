import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "blur";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
  duration?: number;
}

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

const FadeIn = ({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  duration = 0.6,
}: FadeInProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={variants[variant]}
    transition={{
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;