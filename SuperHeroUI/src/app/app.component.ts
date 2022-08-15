import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  
  title = 'SuperHeroUI';

  superHeroes: SuperHero[] = [];

  heroToEdit?: SuperHero;

  destroy = new Subject();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() {

    this.superHeroService.getSuperHeros().pipe(takeUntil(this.destroy)).subscribe((data: SuperHero[]) => {

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

  ngOnDestroy() {

    this.destroy.next(true);

  }

}