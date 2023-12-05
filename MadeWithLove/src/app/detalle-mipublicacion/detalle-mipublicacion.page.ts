import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-mipublicacion',
  templateUrl: './detalle-mipublicacion.page.html',
  styleUrls: ['./detalle-mipublicacion.page.scss'],
})
export class DetalleMipublicacionPage implements OnInit {
  entrada: {
    id: string,
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  } = {
    id: '',
    fecha: '',
    fechaTexto: '',
    titulo: '',
    ingredientes: '',
    preparacion: '',
  };


  constructor(private router: Router) {
    const extras = this.router.getCurrentNavigation()?.extras.state;
    if (extras && 'entrada' in extras) {
      this.entrada = extras['entrada'];
    }
   }

  ngOnInit() {
  }
}
