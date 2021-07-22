import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bird } from 'src/app/bird';
import { BirdService } from 'src/app/bird.service';

@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: [ './bird-detail.component.css' ]
})
export class BirdDetailComponent implements OnInit {
  bird: Bird | undefined;

  constructor(
    private route: ActivatedRoute,
    private birdService: BirdService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBird();
  }

  getBird(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.birdService.getBird(id)
      .subscribe(bird => this.bird = bird);
  }

  goBack(): void {
    this.location.back();
  }
}
