import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicionperfilPage } from './edicionperfil.page';

const routes: Routes = [
  {
    path: '',
    component: EdicionperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicionperfilPageRoutingModule {}
