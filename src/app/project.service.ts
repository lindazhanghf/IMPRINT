import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './data/projects';

@Injectable()
export class ProjectService {
  getProjects(): Promise<Project[]> {
    console.log(PROJECTS);
    return Promise.resolve(PROJECTS);
  }
  getProject(id: number): Promise<Project> {
    return this.getProjects()
               .then(projects => PROJECTS.find(project => project.id === id));
  }

  // getProjects(): Project[] {
  //   console.log(PROJECTS);
  //   return PROJECTS;
  // }

  // getProject(id: number): Project {
  //   return PROJECTS.find(project => project.id === id);
  // }
}
