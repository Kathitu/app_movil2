import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../api-rest.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  nombreUsuario: string = '';
  publicacionesCount: number = 0;
  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> = [];

  // Estas dos variables deben ser asignadas en algún lugar
  nombre: string = '';
  descripcion: string = '';

  constructor(private router: Router, private apiService: ApiService) {
    this.cargarEntradas();
  }

  ngOnInit() {
    console.log("ngOnInit is running");
    this.nombreUsuario = this.apiService.getNombreUsuario();
    this.apiService.nombre$.subscribe((nombre) => (this.nombre = nombre));
    this.apiService.descripcion$.subscribe((descripcion) => (this.descripcion = descripcion));
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

  irDetalle(entrada: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }) {
    let datosNavegacion: NavigationExtras = {
      state: {
        entrada: entrada
      }
    }
    this.router.navigate(['/detalle-mipublicacion'], datosNavegacion);
  }  
}

