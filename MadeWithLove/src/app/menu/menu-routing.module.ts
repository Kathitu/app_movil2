import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [ //Rutas hijas
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'publicar',
      loadChildren: () => import('../publicar/publicar.module').then( m => m.PublicarPageModule)
    },  
    {
      path: 'miperfil',
      loadChildren: () => import('../miperfil/miperfil.module').then( m => m.MiperfilPageModule)
    },
    {
      path: 'favoritos',
      loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
    },
    {
      path: 'explorar',
      loadChildren: () => import('../explorar/explorar.module').then( m => m.ExplorarPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
