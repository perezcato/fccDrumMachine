import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {SoundService} from './sound.service';
import {Sound} from './sound';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drum-machine';
  soundListType: string;

  soundList: Sound[];
  message: string;

  constructor(private sound: SoundService, private el: ElementRef) {}

  ngOnInit(): void {
    this.sound.getSoundTwo()
      .subscribe( (sound: Sound[]) => this.soundList = sound );
  }


  @HostListener('mouseup', ['$event'])
  playSound($event) {
    // @ts-ignore
    event.target.children[0].play();
    // @ts-ignore
    this.message = event.target.children[0].id;
  }

  @HostListener('window:keydown', ['event'])
  keyPressd($event: any) {
    // @ts-ignore
    const soundPressed =  this.soundList.indexOf(this.soundList.find(x => x.keycode === event.which));
    // alert(soundPressed);

    if ( soundPressed >= 0) {
      const viewElements = [this.el.nativeElement.children[0].children[0].children[0].children];
      const elements = [viewElements[0]];

      this.message = elements[0][soundPressed].children[0].id;
      elements[0][soundPressed].children[0].play();
    }
  }
}

