import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SearchBarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
