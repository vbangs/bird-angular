import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { BirdsComponent } from './components/birds/birds.component';
import { BirdDetailComponent } from './components/bird-detail/bird-detail.component';
import { HomeComponent } from './components/home/home.component';
import { BirdFormComponent } from './components/bird-form/bird-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/bigyear', pathMatch: 'full' },
  { path: 'bigyear', component: HomeComponent},
  { path: 'main', component: MainComponent },
  { path: 'bird-detail/:id', component: BirdDetailComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'addbird', component: BirdFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
