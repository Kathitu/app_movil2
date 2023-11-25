import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage implements OnInit {

  fecha: string;

  entradas: Array<{ 
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
    
  }> = [];

  entradaActual: { 
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  } = {
    fecha: '',
    fechaTexto: '',
    titulo: '',
    ingredientes: '',
    preparacion: '',
  };

  constructor(public toastController: ToastController) {
    moment.locale('es-mx');
    this.fecha = moment().format();
    this.cargarEntradas();
   }

  cargarEntradas() {
    this.entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    this.InicializarNuevaEntrada();
  }

  InicializarNuevaEntrada() {
    this.entradaActual = {
      fechaTexto: moment().format('DD [de] MMMM [del] YYYY'),
      fecha: moment().format('DD-MM-YY'),
      titulo: '',
      ingredientes: '',
      preparacion: ''
    };
  }

  async guardarEntrada() {
    this.entradas.push({ ...this.entradaActual });
    localStorage.setItem('entradas', JSON.stringify(this.entradas));

    const toast = await this.toastController.create({
      message: 'Receta publicada',
      duration: 2000
    });
    toast.present();

    // despues de guardar inicializa una nueva entrada para permitir agregar mas
    this.InicializarNuevaEntrada();
  }

  ngOnInit() {
  }
}



