"use client";

import { useState } from "react";

type PersonalityGalleryProps = {
  theme: "dark" | "light";
};

const defaultPhotos = [
  "/social/GAT.jpg",
  "/social/Rutgers.jpg",
  "/social/Suspension.jpg",
  "/project/CNC.jpg",
  "/social/NJIT.jpg",
  "/social/Primark.jpg",
  "/comp/Claude2.jpg",
  "/social/AccordWork.jpg",
  "/icons/FHRIC.jpg",
  "/social/Taiwan.jpg",
  "/social/Convention25.jpg",
  "/social/BlessedMeet.jpg",
  "/social/CarPortrait.jpg",
  "/social/Valedictorian.jpg",
  "/social/RasB.jpg",
  "/social/ChrisC.jpg",
];

export function PersonalityGallery({ theme }: PersonalityGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const cardTone =
    theme === "dark" ? "bg-slate-900/50 text-slate-100" : "bg-white text-slate-900";

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {defaultPhotos.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            type="button"
            onClick={() => setSelectedPhoto(src)}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${cardTone} shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="aspect-[4/5] w-full">
              <img
                src={src}
                alt="Personality shot"
                className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </button>
        ))}
      </div>

      {selectedPhoto ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="Personality enlarged"
              className="max-h-[80vh] w-full rounded-3xl object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-lg hover:bg-black/60"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
