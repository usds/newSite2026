export type ImageBreakScene = {
  src: string;
  alt: string;
};

const FALLBACK_SCENE: ImageBreakScene = {
  src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80",
  alt: "Government service paperwork and documentation workflow.",
};

export const IMAGE_BREAK_SCENES: readonly ImageBreakScene[] = [
  {
    src: "/image-breaks/white-house.jpg",
    alt: "White House grounds in Washington, D.C.",
  },
  {
    src: "/image-breaks/eop-building.jpg",
    alt: "Eisenhower Executive Office Building beside the White House complex.",
  },
  {
    src: "/image-breaks/jackson-place.jpg",
    alt: "Jackson Place near Lafayette Square in Washington, D.C.",
  },
];

export function getImageBreakScene(index: number): ImageBreakScene {
  const count = IMAGE_BREAK_SCENES.length;

  if (count === 0) {
    return FALLBACK_SCENE;
  }

  const normalizedIndex = ((index % count) + count) % count;
  return IMAGE_BREAK_SCENES[normalizedIndex] ?? FALLBACK_SCENE;
}
