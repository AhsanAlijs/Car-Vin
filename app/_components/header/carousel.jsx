'use client'
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from 'react'

export default function TestimonialCarousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="mt-12 max-w-screen-2xl mx-auto [--slide-spacing:1rem] [--slide-size:calc(100%/3)] max-sm:[--slide-size:calc(100%/1)] max-md:[--slide-size:calc(100%/2)] max-2xl:[--slide-size:calc(100%/3)] [mask:linear-gradient(to_right,transparent,white_25%,white_75%,transparent)] max-sm:[mask:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="ml-[calc(var(--slide-spacing)*-1)] touch-pan-y touch-pinch-zoom flex [backface-visibility:hidden] cursor-grab active:cursor-grabbing w-full py-6 *:flex-[0_0_var(--slide-size)] *:ml-[var(--slide-spacing)]">
          {children}
        </div>
      </div>

      <div className="flex gap-2 mt-6 justify-center items-center py-6">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`size-3 rounded-full border-2 border-red-700 transition-all duration-500 ${index === selectedIndex ? "bg-red-700 w-6" : "bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
};

function useDotButton(emblaApi, onButtonClick) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

function DotButton(props) {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}