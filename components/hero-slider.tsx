"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

const slides: Slide[] = [
  {
    image: "/images/hero-global.png",
    title: "Welcome to Busaiteen Chat Dialogue Centre",
    subtitle: "Conveying the Correct Creed of Faith in an Era of Division",
    primaryButton: {
      text: "Discover the Path to Guidance",
      href: "/about",
    },
    secondaryButton: {
      text: "Start a Conversation",
      href: "/chat",
    },
  },
  {
    image: "/images/hero-dialogue.jpg",
    title: "Engage in Meaningful Dialogue",
    subtitle: "Connect with knowledgeable advisors ready to answer your questions about Islam",
    primaryButton: {
      text: "Chat with an Advisor",
      href: "/chat",
    },
    secondaryButton: {
      text: "Learn More",
      href: "/about",
    },
  },
  {
    image: "/images/hero-guidance.jpg",
    title: "Your Journey to Truth Begins Here",
    subtitle: "Explore authentic Islamic resources and find guidance for life's questions",
    primaryButton: {
      text: "Browse Resources",
      href: "/docs",
    },
    secondaryButton: {
      text: "Get in Touch",
      href: "/chat",
    },
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] w-full overflow-hidden md:h-[700px] lg:h-[800px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>

          {/* Content */}
          <div className="container relative z-20 mx-auto flex h-full items-center px-4 md:px-6">
            <div className="max-w-2xl space-y-6">
              <h1
                className={cn(
                  "text-balance text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl",
                  "transform transition-all duration-700 ease-out",
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: index === currentSlide ? "200ms" : "0ms" }}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-pretty text-lg text-background/80 md:text-xl",
                  "transform transition-all duration-700 ease-out",
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: index === currentSlide ? "400ms" : "0ms" }}
              >
                {slide.subtitle}
              </p>
              <div
                className={cn(
                  "flex flex-col gap-4 sm:flex-row",
                  "transform transition-all duration-700 ease-out",
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: index === currentSlide ? "600ms" : "0ms" }}
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href={slide.primaryButton.href}>
                    {slide.primaryButton.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {slide.secondaryButton && (
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-background/30 bg-transparent text-background hover:bg-background/10"
                  >
                    <Link href={slide.secondaryButton.href}>
                      {slide.secondaryButton.text}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-background/10 p-3 text-background backdrop-blur-sm transition-all hover:bg-background/20 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-background/10 p-3 text-background backdrop-blur-sm transition-all hover:bg-background/20 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "w-8 bg-secondary"
                : "w-3 bg-background/40 hover:bg-background/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-background/10">
        <div
          className="h-full bg-secondary transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
