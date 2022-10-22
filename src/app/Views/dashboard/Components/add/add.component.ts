import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { createAction, Store } from '@ngrx/store';
import { Info } from 'src/app/Models/info';
// import { addData } from '../../dashboard/Store/action/action.actions';
// import { InfoState } from '../../dashboard/Store/reducer/reducer.reducer';
import { InfoState } from '../../Store/reducer/reducer.reducer';
import { addData } from '../../Store/action/action.actions';
// import { Action } from 'rxjs/internal/scheduler/Action';
import { Action } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  _addForm!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<InfoState>,
  ) { }

  action!:Action;

  ngOnInit(): void {
    this.inputForm();
  }

  inputForm(){
    this._addForm = this.formBuilder.group({
      data:  new FormControl("",[Validators.required]),
    
     });
  }

  onAdd(): void{
    var value = this._addForm.value;
    const info = new Info();
    info.data = value.data;
    // this.action.type = "ADD_DATA";
    this.store.dispatch(addData(info));
    console.log(value.data);
    console.log("info value === ",(info),"====");
    this._addForm.reset();
  }

}
