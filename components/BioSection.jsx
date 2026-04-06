"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import { home } from "../content/home";

export default function BioSection() {
  const imageRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const updateParallax = () => {
      const imageWrapper = imageRef.current;
      if (!imageWrapper) return;
      const rect = imageWrapper.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setParallaxY((clamped - 0.5) * 18);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        updateParallax();
      });
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <SectionWrapper className="relative overflow-hidden border-b border-white/10 bg-brand-charcoal text-brand-light">
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20 lg:gap-24">
        <Reveal>
          <div ref={imageRef} className="relative mx-auto w-full max-w-md md:-ml-8 md:max-w-none lg:-ml-10">
            <div
              className="relative aspect-[1/1] overflow-hidden rounded-2xl bg-brand-light shadow-[0_36px_75px_-32px_rgba(0,0,0,0.55)] ring-1 ring-black/10"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <Image
                src={home.bio.photoFile}
                alt={home.bio.photoAlt}
                width={home.bio.photoWidth}
                height={home.bio.photoHeight}
                className="h-full w-full object-cover object-center transition-all duration-400 ease-premium hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                unoptimized
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-5 hidden h-20 w-20 rounded-full bg-brand-red/20 blur-2xl md:block" aria-hidden />
          </div>
        </Reveal>

        <div className="relative z-10 mx-auto w-full max-w-xl border-l border-brand-red/70 pl-6 md:-mr-4 md:max-w-2xl md:pl-8">
          <Reveal>
            <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{home.bio.eyebrow}</p>
          </Reveal>
          <div className="mt-8 space-y-10 md:space-y-12">
            {home.bio.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delayMs={index * 110}>
                <p
                  className={`font-body text-[20px] leading-[1.95] text-brand-light/92 md:text-[22px] ${
                    index === 0 ? "first-letter:mr-2 first-letter:float-left first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-brand-red md:first-letter:text-7xl" : ""
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
