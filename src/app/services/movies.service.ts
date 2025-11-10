import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculaDetalle, RespuestaMDB, RespuestaCredits, Genre  } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL= environment.url;
const API_KEY= environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private popularesPage = 0;
  generos: Genre[]=[];

  constructor(private http: HttpClient) {}

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${API_KEY}&language=es&include_image_languaje=es`;
    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  buscarPeliculas(texto: string) {
    return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${texto}`);
  }

  getFeatured() {
    const hoy = new Date();
    const ultimoDia= new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  getPeliculaDetalle(id: number) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id: number) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  cargarGeneros(): Promise<Genre[]>{
    return new Promise (resolve =>{
      this.ejecutarQuery<{ genres: Genre[] }>('/genre/movie/list?a=1')
      .subscribe(resp => {
        this.generos =resp['genres'];
        console.log(this.generos);
        resolve(this.generos)
      });
    });
  }

}
