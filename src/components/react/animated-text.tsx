import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["hsla(180, 7%, 75%, 0.9)", "hsla(180, 7%, 75%, 0.9)", "#f2994a", "#f2994a", "#f2994a", "#f2994a"]
  );

  return (
    <section ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </section>
  );
};

export const TextSection = () => {
  return (
    <section className="animated-text">
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
      <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing.</TextWrapper>
    </section>
  );
};
