import React, { useState } from 'react';
import { PresentationLayout } from './src/components/PresentationLayout';
import { TitleSlide } from './src/slides/TitleSlide';
import { ProblemSlide } from './src/slides/ProblemSlide';
import { SolutionSlide } from './src/slides/SolutionSlide';
import { BlueprintSlide } from './src/slides/BlueprintSlide';
import { Tactic1Slide } from './src/slides/Tactic1Slide';
import { Tactic2Slide } from './src/slides/Tactic2Slide';
import { Tactic3Slide } from './src/slides/Tactic3Slide';
import { ConclusionSlide } from './src/slides/ConclusionSlide';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide key="title" />,
    <ProblemSlide key="problem" />,
    <SolutionSlide key="solution" />,
    <BlueprintSlide key="blueprint" />,
    <Tactic1Slide key="tactic1" />,
    <Tactic2Slide key="tactic2" />,
    <Tactic3Slide key="tactic3" />,
    <ConclusionSlide key="conclusion" />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <PresentationLayout
      currentSlide={currentSlide}
      totalSlides={slides.length}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
    >
      {slides[currentSlide]}
    </PresentationLayout>
  );
}