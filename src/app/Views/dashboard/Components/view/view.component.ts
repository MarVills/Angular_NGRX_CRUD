import { Component, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Info } from 'src/app/Models/info';
// import { InfoState } from '../../dashboard/Store/reducer/reducer.reducer';
import { selectData } from '../../Store/selector/selector.selectors';
import { InfoState } from '../../Store/reducer/reducer.reducer';
import * as InfoActions from '../../Store/action/action.actions';
import {deleteSingleCustomerAction} from '../../Store/action/action.actions'
// import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent{

  info$: Observable<Info[]>;
  action!: Action;

  constructor(private store: Store<InfoState>) {
    this.info$ = this.store.pipe(select(selectData))
   }

   onDeleteClick(data: Info): void {
    // this.action.type = "ADD_DATA";
    this.store.dispatch(deleteSingleCustomerAction(data));
   }
}
