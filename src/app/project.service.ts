import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './data/projects';

@Injectable()
export class ProjectService {
  project_list: Project[] = PROJECTS;
  temp_project: Project;

  getProjects(): Promise<Project[]> {
    return Promise.resolve(this.project_list);
  }

  getProject(id: number): Promise<Project> {
    return this.getProjects()
               .then(projects => this.project_list.find(project => project.id === id));
  }


  getProjectByCategory(categryID: number): Promise<Project> {
    return this.getProjects()
               .then(projects => this.project_list.find(project => project.category === categryID));
  }

  calculateProgress(projectID: number, type: string): any {
    this.getProject(projectID).then(project => {
        var resources_of_type = project.resources.filter(function(resource){
          return resource.type == type;
        })
        return project.progress;
    });
  }

  getListLength() : number {
    return this.project_list.length;
  }

  saveProject(new_project) {
    this.project_list.push(new_project);
  }
}
