import Carousel from "./Carousel";
import slides from "./slides";

export default function ExampleCarousel() {
  return (
    <Carousel
      slides={slides}
      defaultImgHeight={640}
      autoAdvanceInterval={3000}
    />
  );
}
