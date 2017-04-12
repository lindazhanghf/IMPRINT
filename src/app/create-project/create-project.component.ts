import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
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


export class CreateProjectComponent implements OnInit {
  // project: Project;
  project: Project;
  categories: Category[];

  constructor(
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().then(categories => {
      this.categories = categories;
    });
    // this.route.params
    //   .switchMap((params: Params) => this.projectService.getProject(+params['id']))
    //   .subscribe(project => {
    //     this.project = project;
    //     this.categoryService.getCategory(this.project.category).then(category => {
    //       this.category = category;
    //     });
    //   });
  }

  goBack(): void {
    this.location.back();
  }

}