import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarPageRoutingModule } from './publicar-routing.module';

import { PublicarPage } from './publicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarPageRoutingModule
  ],
  declarations: [PublicarPage]
})
export class PublicarPageModule {}
