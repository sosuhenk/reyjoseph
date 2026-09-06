import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Japan Culture",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "introdcution japan culture website",
  },
  {
    title: "Matcha Web",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "minuman yang segar dan enak",
  },
  {
    title: "Portofolio",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "portofolio website untuk pertama kalinya",
  },
  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  },
  {
    title: "Ecommerce Website",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Penjualan baju online berbasis website",
  },
] as const satisfies ProjectPreview[];
