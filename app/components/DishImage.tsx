"use client";

import { useEffect, useRef, useState } from "react";

type DishImageProps = {
  src: string;
  alt: string;
  emoji: string;
};

export default function DishImage({ src, alt, emoji }: DishImageProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-chilli/50 via-char to-ink">
      {failed ? (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center text-6xl"
        >
          {emoji}
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={640}
          height={480}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110 motion-reduce:transition-none"
        />
      )}
    </div>
  );
}
