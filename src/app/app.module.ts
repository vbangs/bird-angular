import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BirdDetailComponent } from './components/bird-detail/bird-detail.component';
import { BirdsComponent } from './components/birds/birds.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BirdFormComponent } from './components/bird-form/bird-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    BirdsComponent,
    BirdDetailComponent,
    HomeComponent,
    BirdFormComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
