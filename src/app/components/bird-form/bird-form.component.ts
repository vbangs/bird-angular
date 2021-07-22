import { Component } from '@angular/core';

import { Bird } from 'src/app/bird';
import { BirdService } from 'src/app/bird.service';

@Component({
  selector: 'app-bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent {

  birdtype = ['Gull-like Birds', 'Hawk-like Birds', 'Upright-perching Water Birds', 
    'Long-legged Waders', 'Upland Ground Birds', 'Duck-like Birds', 'Hummingbirds',
    'Sandpiper-like Birds', 'Pigeon-like Birds', 'Chicken-like Marsh Birds', 'Swallow-like Birds',
    'Perching Birds', 'Owls', 'Tree-Clinging Birds']

  model = new Bird(20, '', this.birdtype[0], '', '');

  submitted = false;

  constructor(private birdService: BirdService){}

  onSubmit() { 
    this.submitted = true; 
    this.birdService.addBird(this.model);
  }


  newBird() {
    this.model = new Bird(42, '', '', '', '');
  }

  beltedKingfisher(): Bird {
    const myBird =  new Bird(42, 'Belted Kingfisher',
                           'Perching Birds',
                           'Plymouth', '');
    console.log('My bird is called ' + myBird.name);
    return myBird;
  }


  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }



}