import smoke from "@assets/images/smoke.png";
import smoke_head from "@assets/images/smoke_head.png";
import smoke_2 from "@assets/images/smoke_2.png";
import bulb from "@assets/images/bulb_tree.png";
import monkey from "@assets/images/monkey.png";

import { getImage } from "astro:assets";

const smokeImg = await getImage({ src: smoke, format: "webp" });
const smoke_headImg = await getImage({ src: smoke_head, format: "webp" });
const smoke_2Img = await getImage({ src: smoke_2, format: "webp" });
const bulbImg = await getImage({ src: bulb, format: "webp" });
const monkeyImg = await getImage({ src: monkey, format: "webp" });

export const cards = [
  {
    id: 1,
    title: "Monkey King",
    description: "A monkey king who is a disciple of Buddha.",
    image: monkeyImg.src,
    link: "/monkey-king",
  },
  {
    id: 2,
    title: "Bulb Tree",
    description: "A tree that grows bulbs.",
    image: bulbImg.src,
    link: "/bulb-tree",
  },
  {
    id: 3,
    title: "Smoke",
    description: "A smoke that is a byproduct of fire.",
    image: smokeImg.src,
    link: "/smoke",
  },
  {
    id: 4,
    title: "Smoke Head",
    description: "A smoke that is a byproduct of fire.",
    image: smoke_headImg.src,
    link: "/smoke-head",
  },
  {
    id: 5,
    title: "Smoke 2",
    description: "A smoke that is a byproduct of fire.",
    image: smoke_2Img.src,
    link: "/smoke-2",
  },
];
