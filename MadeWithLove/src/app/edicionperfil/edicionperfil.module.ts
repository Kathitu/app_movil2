import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicionperfilPageRoutingModule } from './edicionperfil-routing.module';

import { EdicionperfilPage } from './edicionperfil.page';
import { ModuloComponentesModule } from 'src/componentes/modulo-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionperfilPageRoutingModule,
    ModuloComponentesModule
  ],
  declarations: [EdicionperfilPage]
})
export class EdicionperfilPageModule {}
