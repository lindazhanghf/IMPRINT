import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { NgClass, NgStyle}           from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectService } from './../project.service';
import { Project } from './../project';
import { Category } from './../category';
import { CategoryService } from './../category.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})


export class ProjectDetailComponent implements OnInit {
  @Input() input_project: Project;
  project: Project;
  category: Category = {
    id: -1,
    name: "Select Category",
    type: true,
    description: ""
  };

  constructor(
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    var self = this;
    if (this.input_project == undefined) {
      this.route.params
        .switchMap((params: Params) => this.projectService.getProject(+params['id']))
        .subscribe(project => {
          self.project = project;
          self.category = this.categoryService.getCategory(this.project.category);
        });
    } else {
      this.project = this.input_project;
      this.input_project = null;
      // console.log(this.project);
      this.category = this.categoryService.getCategory(this.project.category);
    }
  }

  goBack(): void {
    this.location.back();
  }

}