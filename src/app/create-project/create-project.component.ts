import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgForm}                   from '@angular/forms';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectService } from './../project.service';
import { Project, Resource } from './../project';
import { Category } from './../category';
import { CategoryService } from './../category.service';

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
  curr_id: number = 0;
  new_resource: Resource = {
    id: 0,
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

  newResource(type : string) : void {
    this.new_resource.id = this.curr_id;
    this.new_resource.type = type;
    this.new_resource.name = '';
    this.new_resource.ideal_number = 0;
    this.new_resource.current_number = 0;
    this.new_resource.contributions = [];

    this.project.resources.push(
      this.deep_copy(this.new_resource)
      );
    this.curr_id = this.curr_id + 1;
  }

  deleteResource(id : number) : void {
    this.project.resources.filter(function(resource) {
      return resource.id != id;
    })
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

  deep_copy(resource): Resource {
    var resource_copy : Resource = {
        id: resource.id,
        type: resource.type,
        name: resource.name,
        ideal_number: resource.ideal_number,
        current_number: resource.current_number,
        contributions: []
    }
    return resource_copy;
    // JSON.parse(JSON.stringify(this.new_resource))
  }
}