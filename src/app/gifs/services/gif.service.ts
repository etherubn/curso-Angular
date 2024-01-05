
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchReponse } from '../interface/gif.interface';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GifService {
baseUrl:string = "https://api.giphy.com/v1/gifs/search"
api_key = "GiIDH86jQSLOEonm1gXOJF3LTxxpCd6F"
  constructor(private http:HttpClient) { 
    this.loadLocalStorage()
  }
  
  gifs:string[]=[]

  gifList:Gif[]=[]

  get _gifs():string[]{
    return [...this.gifs]
  }

  searchTag(query:string){
    this.organizeTag(query)

    const params = new HttpParams()
      .set("api_key",this.api_key)
      .set("q",query)
      .set("limit","12")
    this.http.get<SearchReponse>(`${this.baseUrl}`,{params})
      .subscribe(resp=> this.gifList = resp.data)
  }

  private loadLocalStorage(){
    if(!localStorage.getItem("gifs")) return
    this.gifs =  JSON.parse(localStorage.getItem("gifs")!)
  }

  private organizeTag(query:string){

    let repeat = this.gifs.some((gif)=> gif===query)
    if (repeat) return

    
    this.gifs.unshift(query)
    this.gifs = this.gifs.splice(0,10)
    localStorage.setItem("gifs",JSON.stringify(this.gifs))
  }
}
