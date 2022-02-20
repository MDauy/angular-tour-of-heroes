import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    if (heroes)
    {
      this.messageService.add("Heroes fetched successfully");
    }
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero with id=${id}`);
    return of(hero);
  }
}
