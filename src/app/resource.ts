export class Resource {
  id: number;
  project: number; // ID of the project it belongs to
  type: string; // Money/volunteers/donations/etc

  ideal_number: number;
  current_number: number;

  // contribution {
  //   user: number;
  //   contribution: number; // amount of money donated (1 for volunteer)
  // }
}
