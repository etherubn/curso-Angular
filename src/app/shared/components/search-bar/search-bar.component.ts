import { GifService } from './../../../gifs/services/gif.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @ViewChild("input") input!:ElementRef<HTMLInputElement>;
  constructor(private gifService:GifService){

  }

  searchTag(){
    if (this.input.nativeElement.value.trim().length<=0) return
    this.gifService.searchTag(this.input.nativeElement.value);

    this.input.nativeElement.value="";
  }



  
}
