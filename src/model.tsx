// used in [id].ts

export type blogDataBreakdownProps = [
  {
    id: number;
    title: string;
    date: string;
    category: string;
    blogBackground?: string | undefined;
    description: string;
    text: string;
    image1?: string | undefined;
    image2?: string | undefined;
  }
];

export interface blogProps {
  data: blogDataBreakdownProps;
  blogData: blogDataBreakdownProps;
}
