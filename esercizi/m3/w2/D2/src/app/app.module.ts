import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route , RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InattiviComponent } from './components/inattivi/inattivi.component';
import { AttiviComponent } from './components/attivi/attivi.component';

const routes: Route[] = [
  {
    path:"", //home
    component: HomeComponent
  },
  {
    path:"attivi",
    component: AttiviComponent
  },
  {
    path:"inattivi",
    component: InattiviComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InattiviComponent,
    AttiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
