import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './data/projects';

@Injectable()
export class ProjectService {
  project_list: Project[] = PROJECTS;
  getProjects(): Promise<Project[]> {
    console.log(PROJECTS);
    return Promise.resolve(this.project_list);
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

  getListLength() : number {
    return this.project_list.length;
  }

  saveProject(new_project) {
    this.project_list.push(new_project);
  }
}
