import { Component, OnInit } from '@angular/core';
import { Bird } from 'src/app/bird';
import { BirdService } from 'src/app/bird.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  birds: Bird[] = [];

  constructor(
    private route: ActivatedRoute,
    private birdService: BirdService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }
}