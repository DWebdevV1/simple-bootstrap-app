import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {RoutingModule} from './routing.module';
import { DashboardComponent } from './application/dashboard/dashboard.component';
import { ApplicationsComponent } from './application/applications/applications.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
