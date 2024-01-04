import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {
  @Input()
  heros:Hero[]=[]

  @Output()
  onIndex:EventEmitter<string> = new EventEmitter();

  delete(id:string){
    this.onIndex.emit(id);
  }
}
