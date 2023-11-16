import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'publicar',
    loadChildren: () => import('./publicar/publicar.module').then( m => m.PublicarPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./miperfil/miperfil.module').then( m => m.MiperfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'edicionperfil',
    loadChildren: () => import('./edicionperfil/edicionperfil.module').then( m => m.EdicionperfilPageModule)
  },
  {
    path: 'detalle-mipublicacion',
    loadChildren: () => import('./detalle-mipublicacion/detalle-mipublicacion.module').then( m => m.DetalleMipublicacionPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'explorar',
    loadChildren: () => import('./explorar/explorar.module').then( m => m.ExplorarPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
