"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type PhrasePart = { text: string; highlight: boolean };

const PHRASES: PhrasePart[][] = [
  [
    { text: "Sua ", highlight: false },
    { text: "marca", highlight: true },
    { text: " conectada ao que ", highlight: false },
    { text: "importa", highlight: true },
  ],
  [
    { text: "Marketing que ", highlight: false },
    { text: "conecta", highlight: true },
  ],
  [
    { text: "Tecnologia que ", highlight: false },
    { text: "inova", highlight: true },
  ],
];

const INTERVAL_MS = 3500;

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden rounded-bl-[2.5rem] rounded-br-[2.5rem]">
      <video
        ref={videoRef}
        src="/background2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-right z-0 scale-110 transform-gpu"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      <div className="absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/logo-empresa-escuro-removebg-preview-copia.png"
            alt="Connex"
            width={480}
            height={160}
            priority
            className="w-64 md:w-30 lg:w-[20rem] h-auto object-contain"
          />

          <div className="mt-4 h-12 md:h-14 lg:h-16 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-white/90 tracking-wide whitespace-nowrap"
              >
                {PHRASES[index].map((part, i) =>
                  part.highlight ? (
                    <span key={i} className="text-primary font-medium">
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </motion.p>
            </AnimatePresence>
          </div>

          <Button
            size="lg"
            className="mt-10 px-10 text-base bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <a href="#contato">Fale com a gente</a>
          </Button>
        </div>

        <div className="hidden lg:block" />
      </div>

      {/* Botão "Conheça a Connex" — canto inferior direito */}
      <div className="absolute bottom-5 right-8 z-20">
        <Button
          variant="outline"
          className="h-21 px-3 gap-2 rounded-xl border-white/20 bg-black/90 text-white backdrop-blur-md hover:bg-black/95 hover:border-white/50 shadow-xl"
          asChild
        >
          <Link href="/about">
            <span className="text-sm font-medium">Conheça a Connex</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
