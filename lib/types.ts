export interface Obra {
  id: number;
  title: string;
  image: string;
  image_zoom?: string;
  image_full?: string;
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
  description: string;
  date: string;
  location: string;
  image?: string;
  info?: {
    title: string;
    description: string;
  };
  obras?: Obra[];
}
