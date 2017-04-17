import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent }   from './homepage/homepage.component';
import { ExploreProjectComponent } from './explore-projects/explore-projects.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',	 	component: HomepageComponent },
  { path: 'explore', 	component: ExploreProjectComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: 'create', 	component: CreateProjectComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about', 		component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
