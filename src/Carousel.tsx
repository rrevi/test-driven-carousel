import { ReactNode, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import CarouselButton from "./CarouselButton";

type Slide = {
  imgUrl?: string;
  description?: ReactNode;
  attribution?: ReactNode;
}

const  Carousel = ({ slides }: { slides?: Slide[] }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div data-testid="carousel">
      <CarouselSlide {...slides?.[slideIndex]} />
      {}
      <CarouselButton
        data-testid="prev-button"
        onClick={() => {
          if(!slides) return;
          setSlideIndex((i) => (i + slides.length - 1) % slides.length)
        }}
      >
        Prev
      </CarouselButton>
      <CarouselButton
        data-testid="next-button"
        onClick={() => {
          if (!slides) return;
          setSlideIndex((i) => (i + 1) % slides.length);
        }}
      >
        Next
      </CarouselButton>
    </div>
  );
}

export default Carousel;