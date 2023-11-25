import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edicionperfil',
  templateUrl: './edicionperfil.page.html',
  styleUrls: ['./edicionperfil.page.scss'],
})
export class EdicionperfilPage implements OnInit {

  desc: Array<{
    nombre: string,
    descripcion: string
  }> = [];

  descActual: {
    nombre: string,
    descripcion: string
  } = {
    nombre: '',
    descripcion: '',
  };
 
  constructor(public toastController: ToastController) {
    this.cargarDesc();
  }

  cargarDesc() {
    this.desc = JSON.parse(localStorage.getItem('desc') || '[]');
    this.InicializarNuevaDesc();
  }

  InicializarNuevaDesc() {
    this.descActual = {
      nombre: '',
      descripcion: ''
    };
  }

  async guardarDesc() {
    this.desc.push({...this.descActual});
    localStorage.setItem('desc', JSON.stringify(this.desc));


    const toast = await this.toastController.create({
      message: 'Perfil actualizado',
      duration: 2000
    });
    toast.present();

    this.InicializarNuevaDesc();
  }

  ngOnInit() {
  }
}