import { Project }         from './project';

export class User {
  id: number;

  username: string;
  name: string;
  phone: string;
  email: string;

  bio: string;
  profile_pic: string; // Path to thumbnail image

  date: string; // Date of join

  // media: string; // Related media (pictures, videos, URLS, etc.)

  neighborhood: number; // Neighborhood ID

  project_interested: Project[];
  project_contributed: Project[];
  project_created: Project[];
}
