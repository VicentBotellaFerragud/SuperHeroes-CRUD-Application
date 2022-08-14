import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-super-hero',
  templateUrl: './edit-super-hero.component.html',
  styleUrls: ['./edit-super-hero.component.scss']
})
export class EditSuperHeroComponent implements OnInit {

  @Input() superHero?: SuperHero;

  @Output() superHeroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void { }

  updateSuperHero(superHero: SuperHero) {

    this.superHeroService.updateSuperHero(superHero).subscribe((superHeroes: SuperHero[] | any) => {
      
      this.superHeroesUpdated.emit(superHeroes);
    
    });

  }

  deleteSuperHero(superHero: SuperHero) {
    
    this.superHeroService.deleteSuperHero(superHero).subscribe((superHeroes: SuperHero[] | any) => {
      
      this.superHeroesUpdated.emit(superHeroes);

      //Maybe I could empty the input fields or assign the variable "superHero" to "undefined" so that the form is removed.
    
    });

  }

  createSuperHero(superHero: SuperHero) {

    this.superHeroService.createSuperHero(superHero).subscribe((superHeroes: SuperHero[] | any) => {
      
      this.superHeroesUpdated.emit(superHeroes);
    
    });

  }

}