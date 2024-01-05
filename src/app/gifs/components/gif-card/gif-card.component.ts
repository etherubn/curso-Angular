import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent {
  @Input()
  details!:Gif
}
