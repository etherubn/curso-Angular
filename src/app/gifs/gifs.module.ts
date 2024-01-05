import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GifCardComponent,
    GifListComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class GifsModule { }
