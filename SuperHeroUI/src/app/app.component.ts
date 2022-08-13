import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'SuperHeroUI';

  superHeroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() {

    this.superHeroes = this.superHeroService.getSuperHeros();

    console.log(this.superHeroes);

  }

}
