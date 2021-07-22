import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bird } from './bird';
import { BIRDS } from './birdlist'

@Injectable({ providedIn: 'root' })
export class BirdService {

  constructor() { }

  getBirds(): Observable<Bird[]> {
    const birds = of(BIRDS);
    return birds;
  }

  getBird(id: number): Observable<Bird> {
    const bird = BIRDS.find(bird => bird.id === id)!;
    return of(bird);
  }
}