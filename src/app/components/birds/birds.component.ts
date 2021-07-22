import { Component, OnInit } from '@angular/core';
import { Bird } from 'src/app/bird';
import { BirdService } from 'src/app/bird.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  birds: Bird[] = [];

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }
}