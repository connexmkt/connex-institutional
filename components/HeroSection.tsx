"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { heroVideos } from "@/lib/heroVideos";

interface VideoCellProps {
  src: string | undefined;
  preload?: "auto" | "none" | "metadata";
  reducedMotion: boolean;
  className?: string;
}

function VideoCell({
  src,
  preload = "none",
  reducedMotion,
  className = "",
}: VideoCellProps) {
  if (!src) {
    return <div className={`bg-black ${className}`} />;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <video
        src={src}
        autoPlay={!reducedMotion}
        muted
        loop={!reducedMotion}
        playsInline
        preload={preload}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const v = (index: number): string | undefined => heroVideos[index];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Grid Background */}
      <div className="absolute inset-0">
        {/* Mobile: single fullscreen cell */}
        <div className="h-full md:hidden">
          <VideoCell
            src={v(0)}
            preload="auto"
            reducedMotion={prefersReducedMotion}
            className="h-full"
          />
        </div>

        {/* Tablet: 2-column simplified grid */}
        <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 lg:hidden h-full">
          <VideoCell
            src={v(0)}
            preload="auto"
            reducedMotion={prefersReducedMotion}
            className="col-start-1 row-start-1 row-span-2"
          />
          <VideoCell
            src={v(1)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-2 row-start-1"
          />
          <VideoCell
            src={v(2)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-2 row-start-2"
          />
        </div>

        {/* Desktop: 3-column mosaic grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 h-full">
          {/* Column 1 — large (rows 1–2) */}
          <VideoCell
            src={v(0)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-1 row-start-1 row-span-2"
          />
          {/* Column 1 — small (row 3) */}
          <VideoCell
            src={v(1)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-1 row-start-3"
          />
          {/* Column 2 — full height (rows 1–3), eager load */}
          <VideoCell
            src={v(2)}
            preload="auto"
            reducedMotion={prefersReducedMotion}
            className="col-start-2 row-start-1 row-span-3"
          />
          {/* Column 3 — three equal rows */}
          <VideoCell
            src={v(3)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-3 row-start-1"
          />
          <VideoCell
            src={v(4)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-3 row-start-2"
          />
          <VideoCell
            src={v(5)}
            preload="none"
            reducedMotion={prefersReducedMotion}
            className="col-start-3 row-start-3"
          />
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold text-white leading-none tracking-tight">
          Connex
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-serif italic text-white/85 tracking-wide">
          Sua marca conectada ao que importa
        </p>
        <Button
          size="lg"
          className="mt-10 px-10 text-base bg-primary hover:bg-primary/90 text-white"
          asChild
        >
          <a href="#contato">Fale com a gente</a>
        </Button>
      </div>
    </section>
  );
}
