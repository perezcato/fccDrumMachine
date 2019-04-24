import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Sound} from './sound';
import {SOUND_ONE, SOUND_TWO} from './sound.mock';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor(private http: HttpClientModule) { }


  getSoundOne(): Observable<Sound[]> {
    return of(SOUND_ONE);
  }
  getSoundTwo(): Observable<Sound[]> {
    return of(SOUND_TWO);
  }
}
