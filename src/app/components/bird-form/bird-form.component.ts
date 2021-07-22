import { Component } from '@angular/core';
import { Bird } from 'src/app/bird';
import { BirdService } from 'src/app/bird.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent {

  model = new Bird(0, '', '', '', '');

  submitted = false;

  constructor(private birdService: BirdService,
    private location: Location){}

  onSubmit() { 
    this.submitted = true; 
    this.birdService.addBird(this.model);
    this.location.back();
  }

  newBird() {
    this.model = new Bird(0, '', '', '', '');
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }

}