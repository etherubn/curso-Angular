import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    NewHeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class HeroesModule { }
