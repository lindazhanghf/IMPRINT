import { Component, OnInit } from '@angular/core';
import { Project } from './../project';
import { ProjectService } from './../project.service';

@Component({
  selector: 'my-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.css' ]
})

export class HomepageComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().then(projects => {
        this.projects = projects.slice(1, 5);
        // this.projects.forEach(function(project){
        //   this.projectService.calculateProgress(project.id);
        // });
      });
  //   this.projects = this.projectService.getProjects();
  }
}