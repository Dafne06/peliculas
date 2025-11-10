import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  textoBuscar = '';
  buscando= false;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Black Phone 2', 'Chainsaw Man', 'Frankenstein', 'Codigo 3'];

  buscar (event: any) {
    const valor = event.detail.value;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    //console.log(valor);
    this.moviesService.buscarPeliculas(valor)
      .subscribe( resp => {
        console.log(resp);
        this.peliculas = resp.results;
        this.buscando = false;
      });
  }

  seleccionarIdea(idea: string) {
  this.textoBuscar = idea;
  this.buscando = true;
  this.moviesService.buscarPeliculas(idea)
    .subscribe(resp => {
      console.log(resp);
      this.peliculas = resp.results;
      this.buscando = false;
    });
  }

  async detalle(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }

}
