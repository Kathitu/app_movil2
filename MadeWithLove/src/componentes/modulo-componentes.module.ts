import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardMipublicacionComponent } from './card-mipublicacion/card-mipublicacion.component';
import { CardFeedComponent } from './card-feed/card-feed.component';



@NgModule({
  declarations: [CardMipublicacionComponent, CardFeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [CardMipublicacionComponent, CardFeedComponent]
})
export class ModuloComponentesModule { }
