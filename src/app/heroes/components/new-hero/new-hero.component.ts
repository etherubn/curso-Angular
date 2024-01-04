import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent {

  @Output()
  onNewHero:EventEmitter<Hero> = new EventEmitter();
  

  character: Hero = {
    name: '',
    power: 0
  }



  addHero() {
    if(this.character.name.trim().length <= 0 || this.character.power <= 0) return
    this.onNewHero.emit(this.character);
    this.character = {
      name: '',
      power: 0
    }
  }

  



}
