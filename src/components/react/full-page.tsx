import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export const FullPage = ({ img }: { img: string }) => {
  const secRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(scrollYProgress, [1, 0.5, 0.1, 0], [-1000, 0, 0, 0]);

  return (
    <section ref={secRef}>
      <motion.div
        className="full-page"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >
        <img
          src={img}
          alt="monkey"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </motion.div>
    </section>
  );
};
