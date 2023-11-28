import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo:'Home',
      url: '/menu/home',
      icono: 'home'
    },
    {
      titulo: 'Mi perfil',
      url: '/menu/miperfil',
      icono: 'person'
    },
    {
      titulo:'Recetas favoritas',
      url: '/menu/favoritos',
      icono: 'heart'
    },
    {
      titulo: 'Recetas guardadas',
      url: '/menu/guardados',
      icono: 'bookmark'
    },
    {
      titulo:'Explorar',
      url: '/menu/explorar',
      icono: 'search'
    },
    {
      titulo:'Contactanos',
      url: '/menu/contacto',
      icono: 'mail'
    },
  ];

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿De verdad quieres salir?',
      buttons:[
        {
          text: 'No, mejor no',
          handler: () => {

          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }
}
