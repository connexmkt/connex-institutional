"use client";

import { Children, useRef, type CSSProperties, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  type MotionValue,
} from "framer-motion";

export interface StorySectionProps {
  children?: ReactNode;
  style?: CSSProperties;
  "aria-label"?: string;
}

export interface StoryScrollProps {
  children: ReactNode;
  "aria-label"?: string;
}

function AnimatedSection({
  children,
  style,
  "aria-label": ariaLabel,
  index,
  total,
  scrollYProgress,
}: StorySectionProps & {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const sectionStart = index / total;
  const transitionDuration = (1 / total) * 0.55;

  const inputRange =
    index === 0
      ? [0, 1]
      : [Math.max(0, sectionStart - 0.001), sectionStart + transitionDuration];
  const outputRange: string[] = index === 0 ? ["0%", "0%"] : ["100%", "0%"];

  const y = useTransform(scrollYProgress, inputRange, outputRange, {
    clamp: true,
    ease: [cubicBezier(0.76, 0, 0.24, 1)],
  });

  return (
    <motion.section
      aria-label={ariaLabel}
      style={{
        ...style,
        y,
        position: "absolute",
        inset: 0,
        zIndex: index + 1,
      }}
      className="w-full h-full flex flex-col p-[clamp(1.5rem,6vw,8rem)] items-center text-center md:items-start md:text-left"
    >
      {children}
    </motion.section>
  );
}

// StorySection acts as a data carrier — its props are consumed by StoryScroll
export function StorySection(_props: StorySectionProps) {
  return null;
}
StorySection.displayName = "StorySection";

export default function StoryScroll({
  children,
  "aria-label": ariaLabel,
}: StoryScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const childArray = Children.toArray(
    children
  ) as React.ReactElement<StorySectionProps>[];
  const total = childArray.length;

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      className="relative"
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {childArray.map((child, index) => (
          <AnimatedSection
            key={index}
            index={index}
            total={total}
            scrollYProgress={scrollYProgress}
            style={child.props.style}
            aria-label={child.props["aria-label"]}
          >
            {child.props.children}
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
