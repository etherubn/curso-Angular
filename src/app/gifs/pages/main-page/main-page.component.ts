import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private gifService:GifService) { }

  get gifList():Gif[]{
    return this.gifService.gifList
  }
}
