import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeros(): SuperHero[] {
    
    let superHero = new SuperHero();

    superHero.id = 1;
    superHero.name = "Spider Man";
    superHero.firstName = "Peter";
    superHero.lastName = "Parker";
    superHero.place = "New York City";

    return [superHero];

  }

}