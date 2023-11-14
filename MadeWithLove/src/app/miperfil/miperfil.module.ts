import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiperfilPageRoutingModule } from './miperfil-routing.module';

import { MiperfilPage } from './miperfil.page';
import { ApiService } from '../api-rest.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiperfilPageRoutingModule
  ],
  declarations: [MiperfilPage],
  providers: [ApiService]
})
export class MiperfilPageModule {}
