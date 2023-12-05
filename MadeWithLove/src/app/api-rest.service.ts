import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(public http: HttpClient, public alertController: AlertController, public navCtrl: NavController){
  }

  obtenerDatos(){
    return this.http.get("https://nancyb3a.github.io/Test_/usuarios_PGY4121_04.json");
  }

  eliminarEntrada(id: string): void {
    const entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    const nuevasEntradas = entradas.filter((entrada: { id: string; }) => entrada.id !== id);
    localStorage.setItem('entradas', JSON.stringify(nuevasEntradas));
}

async eliminarUsuario(): Promise<void> {
  {
    const alert = await this.alertController.create({
      header: '¡ATENCIÓN!',
      message: 'Esta apunto de eliminar tu cuenta ¿Deseas continuar?',
      buttons:[
        {
          text: 'No, mejor no',
          handler: () => {


          }
        }, {
          text: 'Si, bye',
          handler: () => {
            localStorage.removeItem('usuario');
            localStorage.removeItem('ingresado');
            localStorage.removeItem('entradas');
            localStorage.removeItem('desc');
            localStorage.removeItem('capturedImage');
            this.navCtrl.navigateRoot('inicio');
          }
        }
      ]
    });


    await alert.present();
  }
}
}
