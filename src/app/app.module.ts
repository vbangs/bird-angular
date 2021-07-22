import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BirdDetailComponent } from './components/bird-detail/bird-detail.component';
import { BirdsComponent } from './components/birds/birds.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ConfigComponent } from './components/config/config.component';
import { BirdFormComponent } from './components/bird-form/bird-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    BirdsComponent,
    BirdDetailComponent,
    HomeComponent,
    ConfigComponent,
    BirdFormComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
