import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url: string = "SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeros(): Observable<SuperHero[]> {
    
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);

  }

  public updateSuperHero(superHero: SuperHero): Observable<SuperHero[]> {
    
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`, superHero);

  }

  public createSuperHero(superHero: SuperHero): Observable<SuperHero[]> {
    
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`, superHero);

  }

  public deleteSuperHero(superHero: SuperHero): Observable<SuperHero[]> {
    
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${superHero.id}`);

  }

}