import { Gif } from './../../interface/gif.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})
export class GifListComponent {
  @Input()
  gifs: Gif[] =[]
}
