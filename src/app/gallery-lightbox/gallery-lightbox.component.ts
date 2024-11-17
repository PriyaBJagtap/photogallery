import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Transform } from 'stream';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './gallery-lightbox.component.html',
  styleUrl: './gallery-lightbox.component.css',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ Transform: 'scale(0.5)' }),
        animate('150ms', style({ Transform: 'scale(1)' }))
      ]),
      transition('visible => void', [
        style({ Transform: 'scale(1)' }),
        animate('150ms', style({ Transform: 'scale(0.5)' }))
      ])
    ]),
  trigger('animation2',[
    transition(':leave',[
      style({opacity:1}),
      animate('5000ms',style({opacity:0.8}))
    ])
  ])
  ]

})
export class GalleryLightboxComponent {

  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faTimes = faTimes;

  previewImage = false;
  showmask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInIt() {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number) {
    this.showmask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index]
  }
  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showmask = false;
    }

  }

  onClosePreview() {
    this.previewImage = false;
  }
  prev(){
    this.currentIndex =this.currentIndex-1;
    if(this.currentIndex <0) {
      this.currentIndex=this.galleryData.length-1;
    }
    this.currentLightboxImage=this.galleryData[this.currentIndex];
}

next(){

  this.currentIndex =this.currentIndex+1;
  if(this.currentIndex > this.galleryData.length-1){
this.currentIndex
  }

  this.currentLightboxImage=this.galleryData[this.currentIndex];

}
}
