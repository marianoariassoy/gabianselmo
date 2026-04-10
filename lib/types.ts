export interface Obra {
  id: number;
  title: string;
  image: string;
  image_zoom?: string;
  description: string;
}

export interface Image {
  id: number;
  image: string;
}

export interface Exhibition {
  id: number;
  title: string;
  year: number;
  exhibition_type: number;
  images: Array<Image>;
  description: string;
  info: {
    title: string;
    description: string;
  };
}
