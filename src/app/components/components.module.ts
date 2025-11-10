import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
//import { ImagenPipe } from '../pipes/imagen.pipe';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
//import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SlideshowBackdropComponent,
                SlideshowPosterComponent,
                SlideshowParesComponent,
                DetalleComponent
  ],
  exports: [SlideshowBackdropComponent,
            SlideshowPosterComponent,
            SlideshowParesComponent,
            DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    //SwiperModule,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
