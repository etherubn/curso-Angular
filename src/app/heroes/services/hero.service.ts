import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { generateId } from '../utils/uuid';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[]= [
    {
      id:generateId(),
      name: 'Krilin',
      power: 100
    },
    {
      id:generateId(),
      name: 'Goku',
      power: 10000
    },
    {
      id:generateId(),
      name: 'Vegeta',
      power: 1000
    }
  ]

  get _heroes(): Hero[] {
    return [...this.heroes]
  }

  constructor() { }

  addHero(hero:Hero) {
    this.heroes.push({...hero, id:generateId()});
  }

  deleteHero(index:string) {
    console.log(this.heroes);
    
    this.heroes = this.heroes.filter(hero=> hero.id !== index)
  }

}
