"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Hls from "hls.js";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

const headlineClassName =
  "text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-white leading-tight tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] text-balance";

function tryPlayVideo(video: HTMLVideoElement) {
  void video.play().catch(() => {
    // Autoplay bloqueado pelo navegador — poster permanece visível
  });
}

function HeadlineParts({ parts }: { parts: PhrasePart[] }) {
  return parts.map((part, i) =>
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
  );
}

function HeroFadeIn({
  hasMounted,
  yOffset,
  duration,
  delay,
  className,
  as = "div",
  children,
}: {
  hasMounted: boolean;
  yOffset: number;
  duration: number;
  delay: number;
  className?: string;
  as?: "div" | "p";
  children: ReactNode;
}) {
  if (!hasMounted) {
    if (as === "p") {
      return <p className={className}>{children}</p>;
    }
    return <div className={className}>{children}</div>;
  }

  const MotionTag = as === "p" ? motion.p : motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let hls: Hls | null = null;

    const markReady = () => setVideoReady(true);

    const onReady = () => {
      markReady();
      if (!prefersReducedMotion) tryPlayVideo(video);
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
      video.addEventListener("loadedmetadata", onReady, { once: true });
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, onReady);
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) markReady();
      });
    }

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      hls?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, PHRASE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [hasMounted]);

  const yOffset = shouldReduceMotion ? 0 : 20;

  return (
    <section className="relative w-full h-screen overflow-hidden rounded-bl-[2.5rem] rounded-br-[2.5rem]">
      <meta name="facebook-domain-verification" content="lyug24glfl4qf0dejym32qrbb4zev0" />
      <div className="absolute inset-0 z-0 md:hidden overflow-hidden">
        <Image
          src={VIDEO_POSTER}
          alt=""
          fill
          priority
          className="object-cover object-right scale-110 transform-gpu"
        />
      </div>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={VIDEO_POSTER}
        onCanPlay={() => setVideoReady(true)}
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-right z-0 scale-110 transform-gpu"
      />

      <div
        className="hidden md:block absolute inset-0 z-[1] bg-black transition-opacity duration-700 pointer-events-none"
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
            {hasMounted ? (
              <AnimatePresence mode="wait">
                <motion.h1
                  key={phraseIndex}
                  initial={{ opacity: 0, y: yOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -yOffset }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.45,
                    ease: "easeInOut",
                  }}
                  className={headlineClassName}
                >
                  <HeadlineParts parts={PHRASES[phraseIndex]} />
                </motion.h1>
              </AnimatePresence>
            ) : (
              <h1 className={headlineClassName}>
                <HeadlineParts parts={PHRASES[0]} />
              </h1>
            )}
          </div>

          <HeroFadeIn
            hasMounted={hasMounted}
            yOffset={yOffset}
            duration={shouldReduceMotion ? 0.2 : 0.6}
            delay={0.45}
            className="mt-4 text-base md:text-lg text-white/70 max-w-xl [text-shadow:0_1px_6px_rgba(0,0,0,0.9)] text-balance"
            as="p"
          >
            Marketing pensado para{" "}
            <em className="not-italic text-white/90">o seu</em> negócio.
          </HeroFadeIn>

          <HeroFadeIn
            hasMounted={hasMounted}
            yOffset={yOffset}
            duration={shouldReduceMotion ? 0.2 : 0.6}
            delay={0.6}
            className="mt-8"
          >
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-base font-semibold text-white bg-primary shadow-[0_0_20px_rgba(91,95,232,0.6)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(91,95,232,0.8)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Entre em contato
              <ArrowRight className="w-4 h-4" />
            </Link>
          </HeroFadeIn>
        </div>
      </div>
    </section>
  );
}
