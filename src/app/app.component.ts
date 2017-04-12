import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ '../assets/css/bootstrap.min.css', './app.component.css'],
  // template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>  `

})

export class AppComponent {
  title = 'Tour of Heroes';

}

