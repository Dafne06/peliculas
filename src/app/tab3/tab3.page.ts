import { Component, OnInit } from '@angular/core';
import { Genre, Pelicula,PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page{

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[]=[];
  favoritoGenero: any []=[{
    genero:'Accion',
    pelis:[]
  }];

  constructor(private datalocal: DataLocalService, private moviesService: MoviesService) {}


  async ionViewWillEnter(){

      this.peliculas= await this.datalocal.cargarFavoritos();
      this.generos= await this.moviesService.cargarGeneros();
      this.peliculasPorGenero(this.generos, this.peliculas)
  }

  peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGenero = [];

    generos.forEach(genero => {
      // Filtra las películas que contengan este género
      const pelisFiltradas = peliculas
        .filter(peli => peli.genres?.some(g => g.id === genero.id))
        // Convierte PeliculaDetalle a Pelicula (para que no dé error de tipo)
        .map(peli => {
          const peliculaAdaptada: Pelicula = {
            adult: peli.adult || false,
            backdrop_path: peli.backdrop_path || '',
            genre_ids: peli.genres ? peli.genres.map(g => g.id) : [],
            id: peli.id || 0,
            original_language: peli.original_language || '',
            original_title: peli.original_title || '',
            overview: peli.overview || '',
            popularity: peli.popularity || 0,
            poster_path: peli.poster_path || '',
            release_date: peli.release_date || new Date(),
            title: peli.title || '',
            video: peli.video || false,
            vote_average: peli.vote_average || 0,
            vote_count: peli.vote_count || 0,
          };
          return peliculaAdaptada;
        });

      if (pelisFiltradas.length > 0) {
        this.favoritoGenero.push({
          genero: genero.name,
          pelis: pelisFiltradas
        });
      }
    });

    console.log(this.favoritoGenero);
  }

  /*peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]){
    this.favoritoGenero =[];
    generos.forEach(genero =>{
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli =>{
          return peli.genres?.find(genre => genre.id === genero.id);
        })
      });
    });
    console.log(this.favoritoGenero)
  }*/
}
