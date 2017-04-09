import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Project } from './../project';
import { ProjectService } from './../project.service';

@Component({
  selector: 'explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css'],
  providers: [ProjectService]
})

export class ExploreProjectComponent implements OnInit {
  title = 'Explore projects around you';
  projects: Project[];
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    // this.projects = this.projectService.getProjects();
    this.projectService.getProjects().then(projects => {
        this.projects = projects
      });
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',
  this.selectedProject.id])
  }

}

