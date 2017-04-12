import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './data/projects';

@Injectable()
export class ProjectService {
  my_projects: Project[] = PROJECTS;
  getProjects(): Promise<Project[]> {
    console.log(PROJECTS);
    return Promise.resolve(this.my_projects);
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

  saveProject(new_project) {
    this.my_projects.push(new_project);
  }
}
