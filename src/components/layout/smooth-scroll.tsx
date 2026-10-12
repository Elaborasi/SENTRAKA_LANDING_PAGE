"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return null;
}

function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

/** Smooth scroll (Lenis) + progress bar, mengikuti pola landing Kovia. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        anchors: { offset: -80 },
        autoRaf: true,
        lerp: 0.09,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
      }}
    >
      <Progress />
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
