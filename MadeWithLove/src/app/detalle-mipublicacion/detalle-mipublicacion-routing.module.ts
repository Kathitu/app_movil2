import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMipublicacionPage } from './detalle-mipublicacion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMipublicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMipublicacionPageRoutingModule {}
