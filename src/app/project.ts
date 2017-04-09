export class Project {
  id: number;
  title: string;
  user: number; // User ID
  description: string;
  date: string;
  category: number; // Catergory ID
  media: string; // Related media (pictures, videos, URLS, etc.)
  neighborhood: number; // Neighborhood ID
  progress: number; // Percentage of progress (0 - 1.0)
  thumbnail: string; // Path to thumbnail image
  // Resources needed... (resources class)
}
