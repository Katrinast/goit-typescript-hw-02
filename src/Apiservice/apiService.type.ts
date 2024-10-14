export interface apiResponse {
  total: number;
  total_page: number;
  results: Image[];
}

export interface Image {
  id: string;
  created_at: string;
  description: string;
  urls: Record<string, string>;
  links: Record<string, string>;
  likes: number;
  tags: Tags[];
  user: { name: string | null, location: string | null };
  alt_description: string;

}

type Tags = {
  title: string;
}

export type Modaldata = Image | null;