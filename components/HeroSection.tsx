"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hls from "hls.js";
import Image from "next/image";
import Link from "next/link";
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

  const HLS_SRC =
    "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
      if (mq.matches) video.pause();
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      if (mq.matches) hls.on(Hls.Events.MANIFEST_PARSED, () => video.pause());
      return () => hls.destroy();
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
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-right z-0 scale-110 transform-gpu"
      />

      {/* Letterbox — barras escuras no topo e base para achatar visualmente o vídeo */}
      <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black via-black/75 to-transparent z-[5] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black via-black/75 to-transparent z-[5] pointer-events-none" />

      {/* Overlay central para legibilidade do conteúdo */}
      <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/logo-empresa-escuro-removebg-preview-copia.png"
            alt="Connex"
            width={480}
            height={160}
            priority
            className="w-64 md:w-80 lg:w-[28rem] h-auto object-contain"
          />

          {/* Pill escuro garante que a frase nunca funde com o vídeo */}
          <div className="mt-4 min-h-12 md:min-h-14 lg:min-h-16 h-auto flex items-center justify-center px-5 py-2 rounded-full bg-black/30 backdrop-blur-sm max-w-[88vw]">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white/90 tracking-wide text-balance [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]"
              >
                {PHRASES[index].map((part, i) =>
                  part.highlight ? (
                    <span
                      key={i}
                      className="text-primary font-medium [text-shadow:0_0_12px_rgba(0,0,0,1),0_1px_6px_rgba(0,0,0,0.9)]"
                    >
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </motion.p>
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-base font-semibold text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Conheça a Connex
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
