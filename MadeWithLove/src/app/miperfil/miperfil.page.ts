import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  publicacionesCount: number = 0;

  //entradas
  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  }> = [];

  //descripcion
  desc: Array<{
    nombre: string,
    descripcion: string
  }> = [];

  constructor(private router: Router) {
    this.cargarEntradas(); //entradas
    this.cargarDescripcion();//descripcion
  }

  ngOnInit() {
  }

  cargarEntradas() {
    this.entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    this.publicacionesCount = this.entradas.length;
    if (!this.entradas) return;
    this.entradas.sort((item1, item2) => {
      if (item1.fecha < item2.fecha) return 1;
      if (item1.fecha > item2.fecha) return -1;
      return 0;
    });
  }

  cargarDescripcion() {
    this.desc = JSON.parse(localStorage.getItem('desc') || '[]');
  }

  irDetalle(entrada: {
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  }) {
    let datosNavegacion: NavigationExtras = {
      state: {
        entrada: entrada
      }
    }
    this.router.navigate(['menu/detalle-mipublicacion'], datosNavegacion);
  }
  
  irDetalleDesc(descperfil: {
    nombre: string,
    descripcion: string
  }) {
    let datosNavegacion: NavigationExtras = {
      state: {
        descperfil: descperfil
      }
    }
    this.router.navigate([''], datosNavegacion);
  } 
}


