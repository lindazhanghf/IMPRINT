import { Resource }         from './resource';

export class Project {
  id: number;

  title: string;
  user: number; // User ID

  description: string;

  date: string;
  timeOfEvent: string; // Actual time of the event
  timeLeft: number; // Days left to sign up
  category: number; // Category ID
  tag: string; // Project tags

  media: string; // Related media (pictures, videos, URLS, etc.)

  neighborhood: number; // Neighborhood ID
  address: string; // Actual address of the event

  progress: number; // Percentage of progress (0 - 1.0)
  thumbnail: string; // Path to thumbnail image

  // Resources needed... (resources class)
  resources_deadline: string;
  resources: Resource[];
}
