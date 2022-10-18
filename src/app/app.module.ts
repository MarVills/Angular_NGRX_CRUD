import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModuleModule } from './Views/dashboard/dashboard-module.module';
import { StoreModule } from '@ngrx/store';
import * as fromInfo from './Views/dashboard/Store/reducer/reducer.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromInfo.infoFeatureKey, fromInfo.reducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
