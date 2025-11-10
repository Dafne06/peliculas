import { Injectable } from '@angular/core';
import { PeliculaDetalle, Pelicula } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  private _storage: Storage | null = null;
  peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage,
              private toastCtrl: ToastController) {
                this.init();
              }



  async init() {
    this._storage = await this.storage.create();
    await this.cargarFavoritos();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
    });
    await toast.present();
  }

  async guardarPelicula (pelicula: PeliculaDetalle) {
    if (!this._storage) {
      await this.init();
    }

    let existe = this.peliculas.find(p => p.id === pelicula.id);
    let mensaje = '';
    let guardada = false;

    if (existe) {
      this.peliculas = this.peliculas.filter(p => p.id !== pelicula.id);
      mensaje = 'Removida de favoritos';
      guardada = false;
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a favoritos';
      guardada=true;
    }

    await this._storage?.set('peliculas', this.peliculas);
    this.presentToast(mensaje);
    return guardada;
    /*let existe = false;
    let mensaje = '';
    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }
    if (existe) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Removida de favoritos';
    }else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a favoritos';
    }


    this.presentToast(mensaje);
    this.storage['set']('peliculas', this.peliculas);*/

  }

  async cargarFavoritos(){
    if (!this._storage) {
      await this.init();
    }

    const peliculas = await this._storage?.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
   /* const peliculas = await this.storage.get ('peliculas');
    this.peliculas =peliculas || [];
    return this.peliculas*/
  }

  async existePelicula (id: number) {
    if (!this._storage) {
      await this.init();
    }

    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);
    return !!existe;
  }

    /*console.log(id);
    id= Number(id);
    console.log(id);

    await this.cargarFavoritos();
    const existe=this.peliculas.find(peli => peli.id === id);

    return (existe) ? true: false;*/

}
