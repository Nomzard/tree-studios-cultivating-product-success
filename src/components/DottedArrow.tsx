import { motion } from "framer-motion";

interface DottedArrowProps {
  /** SVG path d attribute */
  path: string;
  /** Viewbox width */
  width?: number;
  /** Viewbox height */
  height?: number;
  className?: string;
  color?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Duration of draw animation */
  duration?: number;
}

const DottedArrow = ({
  path,
  width = 200,
  height = 120,
  className = "",
  color = "hsl(var(--terracotta))",
  delay = 0.3,
  duration = 1.8,
}: DottedArrowProps) => {
  return (
    <motion.svg
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={`pointer-events-none ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Dotted path that draws in */}
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="6 6"
        strokeLinecap="round"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 0.6,
            transition: {
              pathLength: { duration, delay, ease: "easeInOut" },
              opacity: { duration: 0.4, delay },
            },
          },
        }}
      />
      {/* Arrowhead */}
      <motion.circle
        r={4}
        fill={color}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 0.7,
            scale: 1,
            transition: { duration: 0.3, delay: delay + duration - 0.2 },
          },
        }}
      >
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          fill="freeze"
          path={path}
          keyPoints="1;1"
          keyTimes="0;1"
        />
      </motion.circle>
    </motion.svg>
  );
};

export default DottedArrow;
