import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CardMipublicacionComponent } from './card-mipublicacion/card-mipublicacion.component';
import { CardFeedComponent } from './card-feed/card-feed.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


@NgModule({
  declarations: [CardMipublicacionComponent, CardFeedComponent, EditarPerfilComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [CardMipublicacionComponent, CardFeedComponent, EditarPerfilComponent]
})
export class ModuloComponentesModule { }
