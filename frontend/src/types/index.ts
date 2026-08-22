export type Category = "Technology" | "Automation" | "Design" | "AI" | "All";

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: Category;
  author: User;
  publishedAt: string;
  readTimeMinutes: number;
  likes: number;
}

export interface FilterState {
  query: string;
  category: Category;
}
