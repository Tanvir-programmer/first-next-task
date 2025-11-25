// src/components/HeroWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";

export default function HeroWrapper() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return <Hero />;
}
