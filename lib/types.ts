export interface Obra {
  id: number;
  title: string;
  image: string;
  image_zoom?: string;
  image_full?: string;
  description: string;
  info?: {
    title: string;
    description: string;
  };
  prev?: Obra | null;
  next?: Obra | null;
}

export interface Image {
  id: number;
  image: string;
}

export interface Exhibition {
  id: number;
  title: string;
  year: number;
  category: string;
  description: string;
}
