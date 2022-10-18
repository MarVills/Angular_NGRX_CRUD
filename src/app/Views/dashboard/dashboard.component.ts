import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../Components/view/view.component';
import { AddComponent } from '../Components/add/add.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
