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

  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() {

    this.superHeroService.getSuperHeros().subscribe((data: SuperHero[]) => {

      this.superHeroes = data;
      
    });

  }

  initNewSuperHero() {

    this.heroToEdit = new SuperHero();

  }

  editSuperHero(superHero: SuperHero) {

    this.heroToEdit = superHero;

  }

  updateSuperHeroesList(superHeroes: SuperHero[]) {

    this.superHeroes = superHeroes;

  }

}