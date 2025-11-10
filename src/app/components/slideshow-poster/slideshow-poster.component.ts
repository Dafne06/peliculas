import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import {register } from 'swiper/element/bundle';
import { DetalleComponent } from '../detalle/detalle.component';

register();

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  standalone: false
})
export class SlideshowPosterComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];


 slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
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
