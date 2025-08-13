"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CaseGallery({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const dialogRef = useRef(null);

  function openAt(i) {
    setIdx(i);
    setOpen(true);
    dialogRef.current?.showModal();
  }

  function close() {
    setOpen(false);
    dialogRef.current?.close();
  }

  function prev() {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIdx((i) => (i + 1) % images.length);
  }

  // fechar com ESC
  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  return (
    <>
      {/* Grid de thumbs */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => openAt(i)}
              className="group block relative aspect-[16/9] overflow-hidden rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-current"
            >
              <Image
                src={img.src}
                alt={img.alt || ""}
                fill
                sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw, 100vw"
                className="object-cover transition group-hover:scale-[1.02]"
                priority={i === 0}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox com <dialog> */}
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/70 p-0 rounded-2xl w-[min(95vw,1100px)]"
        onClose={() => setOpen(false)}
      >
        {open && (
          <div className="relative">
            <Image
              src={images[idx].src}
              alt={images[idx].alt || ""}
              width={images[idx].width || 1600}
              height={images[idx].height || 900}
              className="w-full h-auto rounded-2xl"
              priority
            />

            {/* Controles */}
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white"
            >
              <FiX />
            </button>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Anterior"
                  className="absolute top-1/2 -translate-y-1/2 left-3 p-2 rounded-full bg-black/70 text-white"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima"
                  className="absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full bg-black/70 text-white"
                >
                  <FiChevronRight />
                </button>
              </>
            )}

            {/* Legenda */}
            {images[idx].alt && (
              <p className="px-4 py-3 text-sm opacity-80">{images[idx].alt}</p>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
