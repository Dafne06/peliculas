import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import {register } from 'swiper/element/bundle';
import { DetalleComponent } from '../detalle/detalle.component';
//import { SwiperOptions } from 'swiper';

register();

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  standalone: false
})
export class SlideshowBackdropComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true,
    spaceBetween: -20
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle( id: number ) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
}
