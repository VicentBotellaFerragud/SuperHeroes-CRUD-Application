import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-super-hero',
  templateUrl: './edit-super-hero.component.html',
  styleUrls: ['./edit-super-hero.component.scss']
})
export class EditSuperHeroComponent implements OnInit, OnDestroy {

  @Input() superHero?: SuperHero;

  @Output() superHeroesUpdated = new EventEmitter<SuperHero[]>();

  destroy = new Subject();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void { }

  updateSuperHero(superHero: SuperHero) {

    this.superHeroService.updateSuperHero(superHero).pipe(takeUntil(this.destroy)).subscribe((superHeroes: SuperHero[] | any) => {
      
      this.superHeroesUpdated.emit(superHeroes);

      this.superHero = undefined;
    
    });

  }

  deleteSuperHero(superHero: SuperHero) {
    
    this.superHeroService.deleteSuperHero(superHero).pipe(takeUntil(this.destroy)).subscribe((superHeroes: SuperHero[] | any) => {
      
      this.superHeroesUpdated.emit(superHeroes);

      this.superHero = undefined;
    
    });

  }

  createSuperHero(superHero: SuperHero) {

    this.superHeroService.createSuperHero(superHero).pipe(takeUntil(this.destroy)).subscribe((superHeroes: SuperHero[] | any) => {
      
      this.superHeroesUpdated.emit(superHeroes);

      this.superHero = undefined;
    
    });

  }

  ngOnDestroy(): void {
    
    this.destroy.next(true);

  }

}