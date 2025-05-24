import { ReactNode } from 'react';

const CarouselButton = ({ children }: { children?: ReactNode }) => (
  <button>{children}</button>
);

export default CarouselButton;