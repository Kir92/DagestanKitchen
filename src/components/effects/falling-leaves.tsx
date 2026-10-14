"use client";

import { useEffect, useState } from "react";

type Leaf = {
  id: number;
  emoji: string;
  left: number;      // % от левого края
  size: number;      // px
  duration: number;  // сек — время падения
  delay: number;     // сек — задержка старта
  rotation: number;  // град — конечный поворот
  opacity: number;   // 0–1
};

const EMOJIS = ["🍂", "🍁", "🍃", "🌿"];
const COUNT = 20;

function generateLeaves(): Leaf[] {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    left: Math.random() * 100,
    size: 16 + Math.random() * 20,       // 16–36 px
    duration: 8 + Math.random() * 10,    // 8–18 сек
    delay: Math.random() * 10,           // 0–10 сек
    rotation: Math.random() * 720 - 360,
    opacity: 0.5 + Math.random() * 0.5,  // 0.5–1
  }));
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    setLeaves(generateLeaves());
  }, []);

  if (leaves.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="leaf absolute"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            ["--rotation" as string]: `${leaf.rotation}deg`,
          }}
        >
          {leaf.emoji}
        </span>
      ))}
    </div>
  );
}