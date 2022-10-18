import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from 'src/app/Views/Components/add/add.component';
import { ViewComponent } from 'src/app/Views/Components/view/view.component';
import { DashboardComponent } from './dashboard.component';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    DashboardComponent,

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModuleModule { }
