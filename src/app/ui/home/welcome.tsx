"use client";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";

export default function Welcome() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const springX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const posX = useTransform(springX, [0, 0.5, 1], [-100, 0, 100]);
  const invertedPosX = useTransform(springX, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section className="relative py-6 h-screen bg-background overflow-x-hidden">
      {theme === "dark" && (
        <div className="absolute blur bg-background -top-2 h-6 w-full z-10" />
      )}
      <motion.div
        style={{ x: invertedPosX }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="font-normal text-xs text-center mt-10 mb-4">
          BIENVENIDO A
        </p>
        <h1 className="font-bold text-5xl text-center mb-4">FANTASTIC STORE</h1>
      </motion.div>
      <motion.div
        style={{ x: posX }}
        className="h-3/4 flex justify-center gap-4 "
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <CardImage src="/images/welcome1.jpg" />
        <CardImage src="/images/welcome2.jpg" />
        <CardImage src="/images/welcome3.jpg" />
        <CardImage src="/images/welcome4.jpg" />
      </motion.div>
    </section>
  );
}

const CardImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-full min-w-[300px] md:min-w-[426px]">
      <Image src={src} alt="Card image" fill className="rounded-md" />
    </div>
  );
};
