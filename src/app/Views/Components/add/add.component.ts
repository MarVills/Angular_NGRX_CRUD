import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Info } from 'src/app/Models/info';
import { InfoState } from '../../dashboard/Store/reducer/reducer.reducer';

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

  ngOnInit(): void {
    this.inputForm();
  }

  inputForm(){
    this._addForm = this.formBuilder.group({
      data:  new FormControl("",[Validators.required]),
    
     });
  }

  onAdd(){
    const info = new Info();

    console.log(this._addForm.value.data)
  }

}
