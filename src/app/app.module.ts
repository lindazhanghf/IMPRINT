import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { ProjectService } from './project.service';
import { CategoryService } from './category.service';
import { UserService } from './user.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ExploreProjectComponent } from './explore-projects/explore-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExploreProjectComponent,
    ProjectDetailComponent,
    CreateProjectComponent,
    RegistrationComponent,
    AboutComponent,
    ProgressBarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProjectService, CategoryService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }