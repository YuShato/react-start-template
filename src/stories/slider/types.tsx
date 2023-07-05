export interface Image {
  id: number;
  src: string;
  alt: string;
}

export interface ProductSliderProps {
  images: Image[];
}
