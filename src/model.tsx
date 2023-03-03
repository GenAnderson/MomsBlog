export interface DataType {
  data: {
    id: number;
    title?: string;
    date?: string;
    category?: string;
    blogBackground?: string;
    description?: string;
    text?: string;
    image1?: string;
    image2?: string;
  };
}

// used in [id].tsx
export interface blogProperties {
  title: string;
  category: string;
  blogBackground: string;
  date: string;
  text: string;
  image1: string;
  image2: string;
}
