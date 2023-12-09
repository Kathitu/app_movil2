import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Share } from '@capacitor/share';

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
    {
      titulo:'Configuración',
      url: '/menu/config',
      icono: 'settings'
    }
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

  shareApp(){
    Share.share({
      title: '¿Has visto la nueva app?',
      text: 'Descarga la nueva app MadeWithLove',
      url: 'https://www.mediafire.com/file/q1eaq0p1bx0lf57/MadeWithLove.apk/file',
    });
  }
  }

