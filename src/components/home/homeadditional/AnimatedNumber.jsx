import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const AnimatedNumber = ({ num, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, num, { duration: 2 });

      return animation.stop;
    }
  }, [num, count, isInView]);

  return (
    <motion.h3 ref={ref} className={className}>
      {typeof num === "number" ? rounded : num}
    </motion.h3>
  );
};

export default AnimatedNumber;
