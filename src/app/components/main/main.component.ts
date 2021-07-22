import { Component, OnInit } from '@angular/core';
import { Bird } from 'src/app/bird';
import { BirdService } from 'src/app/bird.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {
  birds: Bird[] = [];

  constructor(private birdService: BirdService) { }

  ngOnInit() {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getBirds()
      .subscribe(birds => this.birds = birds.slice(1, 9));
  }
}
