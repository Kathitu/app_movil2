import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiperfilPage } from './miperfil.page';

const routes: Routes = [
  {
    path: '',
    component: MiperfilPage
  },
  {//ruta nieta
    path: 'detalle-mipublicacion',
    loadChildren: () => import('../detalle-mipublicacion/detalle-mipublicacion.module').then( m => m.DetalleMipublicacionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiperfilPageRoutingModule {}
