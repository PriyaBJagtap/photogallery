import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


interface Item {
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GalleryLightboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myphotogallery';

  data: Item[]=[

    {
      imageSrc: '/assets/images/image1.jpg',
      imageAlt:'1'

    },
{
      imageSrc: '/assets/images/image2.jpg',
      imageAlt:'2'
    },
    {
      imageSrc: '/assets/images/image3.jpg',
      imageAlt:'3'
    },
    {
      imageSrc: '/assets/images/image4.jpg',
      imageAlt:'4'
    },
    {
      imageSrc: '/assets/images/image5.jpg',
      imageAlt:'5'
    },
    {
      imageSrc: '/assets/images/image6.jpg',
      imageAlt:'6'
    },
    {
      imageSrc: '/assets/images/image7.jpg',
      imageAlt:'7'
    },
    {
      imageSrc: '/assets/images/image8.jpg',
      imageAlt:'8'
    },
    {
      imageSrc: '/assets/images/image1.jpg',
      imageAlt:'9'
    },
  ];
}
