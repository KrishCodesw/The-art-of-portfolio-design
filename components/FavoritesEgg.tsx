"use client";

import { motion } from "framer-motion";

const stickers = [
  {
    id: "thor",
    name: "Thor",
    image: "/thor.jpg",
    position: "object-[center_25%]",
    scale: "scale-125",
    rotate: -8,
    wobble: [-8, -5, -8],
    className: "z-10",
  },
  {
    id: "kai",
    name: "Kai",
    image: "/kai.jpg",
    position: "object-[center_25%]",
    scale: "scale-100",
    rotate: -8,
    wobble: [-8, -5, -8],
    className: "z-10",
  },
  {
    id: "charizard",
    name: "Charizard",
    image: "/charizard.png",
    position: "object-center",
    scale: "scale-110",
    rotate: 10,
    wobble: [10, 7, 10],
    className: " z-20",
  },
];

export default function FavoritesEgg() {
  return (
    <div className="mt-8 flex items-end gap-6">
      {stickers.map((s, i) => (
        <motion.div
          key={s.id}
          className={`relative ${s.className}`}
          initial={{ rotate: s.rotate }}
          animate={{ rotate: s.wobble }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        >
          {/* tape strip */}
          {/* tape strip */}
          <div className="absolute -top-2 left-1/2 h-4 w-9 -translate-x-1/2 rotate-[-4deg] bg-white/70 shadow-sm ring-1 ring-black/10 backdrop-blur-[1px] dark:bg-white/25 dark:ring-white/20" />
          <div className="h-18 w-18 overflow-hidden rounded-md border-[3px] border-white bg-gray-100 shadow-[0_6px_14px_rgba(0,0,0,0.25)] dark:border-white/90">
            <img
              src={s.image}
              alt={s.name}
              className={`h-full w-full object-cover ${s.scale} ${s.position}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
