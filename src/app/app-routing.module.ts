import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent }   from './homepage/homepage.component';
import { ExploreProjectComponent } from './explore-projects/explore-projects.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',	 	component: HomepageComponent },
  { path: 'explore', 	component: ExploreProjectComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  // { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
