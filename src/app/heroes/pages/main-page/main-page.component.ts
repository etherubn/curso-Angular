import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{

  

  constructor(private heroService:HeroService) { 

  }
  
  get characters(): Hero[] {
    return this.heroService._heroes
  }

  addHero(hero:Hero) {
    this.heroService.addHero(hero);
  }

  deleteHero(id:string) {
    this.heroService.deleteHero(id);
  }
}
