import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './Components/add/add.component';
import { ViewComponent } from './Components/view/view.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModuleModule { }
