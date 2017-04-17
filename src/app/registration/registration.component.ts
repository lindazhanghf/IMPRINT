import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
// import { Project } from './../project';
// import { ProjectService } from './../project.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../app.component.css'],
  // providers: [ProjectService]
})

export class RegistrationComponent implements OnInit {
  // user = "new_user";
  step = 1;

  constructor(
    // private projectService: ProjectService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.getProjects();
  }


  onSelect(): void {
    // this.selectedProject = project;
  }

  nextStep(): void {
    this.step = this.step + 1;
    // if (this.step > 3)
    // {
    //   this.submit_project();
    // }
  }

  previousStep(): void {
    this.step--;
  }

  // goBack(): void {
  //   this.location.back();
  // }

}

