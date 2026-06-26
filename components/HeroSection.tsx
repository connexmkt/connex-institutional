"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hls from "hls.js";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

// TODO: substituir pelo número real de vagas disponíveis este mês
const VAGAS_DISPONIVEIS = 4;

// TODO: substituir pelos números reais de clientes, projetos e anos
// const CREDIBILITY_STATS = [
//   { value: "30+", label: "clientes ativos" },
//   { value: "120+", label: "projetos entregues" },
//   { value: "5+", label: "anos de mercado" },
// ];

const HLS_SRC =
  "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

const VIDEO_POSTER =
  "https://image.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8/thumbnail.jpg?time=0&width=1920";

type PhrasePart = { text: string; highlight: boolean };

const PHRASES: PhrasePart[][] = [
  [
    { text: "Transformamos marcas locais em ", highlight: false },
    { text: "autoridade digital", highlight: true },
  ],
  [
    { text: "Tecnologia que ", highlight: false },
    { text: "inova", highlight: true },
  ],
  [
    { text: "Design que ", highlight: false },
    { text: "conecta", highlight: true },
  ],
];

const PHRASE_INTERVAL_MS = 3500;

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, PHRASE_INTERVAL_MS);

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
        poster={VIDEO_POSTER}
        onCanPlay={() => setVideoReady(true)}
        className="absolute top-0 left-0 w-full h-full object-cover object-right z-0 scale-110 transform-gpu"
      />

      <div
        className="absolute inset-0 z-[1] bg-black transition-opacity duration-700 pointer-events-none"
        style={{ opacity: videoReady ? 0 : 1 }}
      />

      <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black via-black/75 to-transparent z-[5] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black via-black/75 to-transparent z-[5] pointer-events-none" />
      <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <Image
            src="/logo-empresa-escuro-removebg-preview-copia.png"
            alt="Connex"
            width={480}
            height={160}
            priority
            className="w-64 md:w-80 lg:w-[28rem] h-auto object-contain mb-6"
          />

          <div className="min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.h1
                key={phraseIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-white leading-tight tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] text-balance"
              >
                {PHRASES[phraseIndex].map((part, i) =>
                  part.highlight ? (
                    <span
                      key={i}
                      className="text-primary [text-shadow:0_0_20px_rgba(91,95,232,0.5)]"
                    >
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 text-base md:text-lg text-white/70 max-w-xl [text-shadow:0_1px_6px_rgba(0,0,0,0.9)] text-balance"
          >
            Marketing pensado para{" "}
            <em className="not-italic text-white/90">o seu</em> negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-base font-semibold text-white bg-primary shadow-[0_0_20px_rgba(91,95,232,0.6)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(91,95,232,0.8)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Entre em contato
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex items-center gap-6 flex-wrap justify-center"
          >
            {/* {CREDIBILITY_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-bold text-white [text-shadow:0_0_12px_rgba(0,0,0,1)]">
                  {stat.value}
                </span>
                <span className="text-xs text-white/55 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
