import { DataLocalService } from './../../services/data-local.service';
import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import {register } from 'swiper/element/bundle';
import { ModalController } from '@ionic/angular';
//import { Cast } from '../../interfaces/interfaces';

register();

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: false
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;

  pelicula: PeliculaDetalle ={};
  actores: Cast [] = []
  oculto=150;
  corazon= 'heart-outline';
  favoritoGuardado = false;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController,
              private datalocal: DataLocalService
  ) { }

 ngOnInit() {
    //console.log('ID', this.id);

    this.datalocal.existePelicula(this.id)
    .then(existe => this.corazon=existe?'heart': 'heart-outline');
    //console.log ('Detalle compone existe', existe)

    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe( resp => {
        console.log(resp);
        this.pelicula=resp;
      });

      this.moviesService.getActoresPelicula(this.id)
      .subscribe( resp => {
        console.log(resp);
        this.actores=resp.cast;
      });
    }
      regresar() {
        this.modalCtrl.dismiss();
    }

    async favorito() {
    /*await this.datalocal.guardarPelicula(this.pelicula);
    this.favoritoGuardado = !(this.favoritoGuardado); // alterna el estado*/
    const guardada= await this.datalocal.guardarPelicula(this.pelicula);
    this.corazon = guardada ? 'heart': 'heart-outline';
  }
}
