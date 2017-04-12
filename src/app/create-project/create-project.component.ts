import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgForm}                   from '@angular/forms';
// import { ActivatedRoute }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectService } from './../project.service';
import { Project, Resource } from './../project';
import { Category } from './../category';
import { CategoryService } from './../category.service';
// import { Resource }         from './../resource';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./../app.component.css', '../../assets/css/bootstrap.min.css']
})


export class CreateProjectComponent implements OnInit {
  // Define empty form
  project: Project = {
    id: 0,
    title: '',
    userID: 0, // User ID
    userName: '', // User's name
    description: '',
    date: '',
    timeOfEvent: '', // Actual time of the event
    timeLeft: 0, // Days left to sign up
    category: 0, // Category ID
    tag: '', // Project tags
    media: '', // Related media (pictures, videos, URLS, etc.)
    neighborhood: 0, // Neighborhood ID
    locationName: '',
    address: '', // Actual address of the event
    progress: 0, // Percentage of progress (0 - 1.0)
    neededVol: 0, // Number of volunteers needed
    thumbnail: '', // Path to thumbnail image
    resources_deadline: '',
    resources: []
  }

  categories: Category[];
  category: Category = {
    id: -1,
    name: "Select Category",
    type: true,
    description: ""
  };
  new_resource: Resource = {
    id: 0,
    project: 0,
    type: '',
    name: '',

    ideal_number: 0,
    current_number: 0,
    contributions: []
  }


  projectForm = new FormGroup ({
    name: new FormControl()
  });
  step = 1; // Step1: Enter Detail; 2: Resources; 3: Preview

  constructor(
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private location: Location
    // private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.project.id = this.projectService.getListLength();
    this.categoryService.getCategories().then(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }

  onSelect(category : Category) : void {
    this.category = category;
    this.project.category = category.id;
  }

  submit_project() : void {
    this.projectService.saveProject(this.project);
  }

  nextStep(): void {
    this.step = this.step + 1;
    if (this.step > 3)
    {
      this.submit_project();
    }
  }

  previousStep(): void {
    this.step--;
  }

  goBack(): void {
    this.location.back();
  }
}