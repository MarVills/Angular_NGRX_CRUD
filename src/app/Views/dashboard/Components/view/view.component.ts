import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Info } from 'src/app/Models/info';
import { InfoState } from '../../dashboard/Store/reducer/reducer.reducer';
import { selectData } from '../../dashboard/Store/selector/selector.selectors';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent{

  info$: Observable<Info[]>;

  constructor(private store: Store<InfoState>) {
    this.info$ = this.store.pipe(select(selectData))
   }


}
