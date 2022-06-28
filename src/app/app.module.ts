import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { RoomsComponent } from './rooms/rooms.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    RoomsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'students-list', component: StudentsComponent},
      {path: 'rooms-list', component: RoomsComponent},
      {path: '', component: HomeComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
