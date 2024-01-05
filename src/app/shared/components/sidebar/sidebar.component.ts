import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private gifService:GifService) { }

  get gifs():string[]{
    return this.gifService._gifs
  }

  searchHistorial(gif:string):void{
    this.gifService.searchTag(gif)
  }
}
