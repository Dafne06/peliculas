import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
//import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  /*slideOpts = {
    slidesPerView: 1.2,
    freeMode: true,
    spaceBetween: -20
  };*/

  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeatured()
      .subscribe(resp => {
        //console.log('Resp',resp);
        this.peliculasRecientes = resp.results;
      });

      this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares()
      .subscribe(resp => {
        const arrTemp = [...this.populares, ...resp.results];
        this.populares = arrTemp;
        //Otra forma de hacerlo
        //this.populares.push( ...resp.results );

      });
  }
}
