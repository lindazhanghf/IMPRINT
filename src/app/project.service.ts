import { Injectable } from '@angular/core';

import { Project, Resource } from './project';
import { PROJECTS } from './data/projects';

@Injectable()
export class ProjectService {
  project_list: Project[] = PROJECTS;

  getProjects(): Promise<Project[]> {
    return Promise.resolve(this.project_list);
  }

  getProject(id: number): Promise<Project> {
    return this.getProjects()
               .then(projects => this.project_list.find(project => project.id === id));
  }

  getProjectByCategory(categryID: number): Promise<Project> {
    var self = this;
    return this.getProjects()
               .then(projects => self.project_list.find(project => project.category === categryID));
  }

  getListLength() : number {
    return this.project_list.length;
  }

  saveProject(new_project) {
    this.project_list.push(new_project);
  }
}
