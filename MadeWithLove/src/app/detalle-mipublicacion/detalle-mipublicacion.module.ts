import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMipublicacionPageRoutingModule } from './detalle-mipublicacion-routing.module';

import { DetalleMipublicacionPage } from './detalle-mipublicacion.page';
import { ModuloComponentesModule } from 'src/componentes/modulo-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMipublicacionPageRoutingModule,
    ModuloComponentesModule
  ],
  declarations: [DetalleMipublicacionPage]
})
export class DetalleMipublicacionPageModule {}
