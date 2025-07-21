"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./moving-border";
import { Carousel } from "./carousel";

// Remove Card and FocusCards grid, use Carousel instead

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  // Map cards to Carousel's SlideData format
  const slides = cards.map(card => ({
    title: card.title,
    button: "Explore",
    src: card.src,
  }));
  return <Carousel slides={slides} />;
} 