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
  const passwordAlert = await this.alertController.create({
    header: 'Confirme su contraseña',
    inputs: [
      {
        name: 'password',
        type: 'password',
        placeholder: 'Contraseña',
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Aceptar',
        handler: async (data) => {
          if (data.password) {
            await this.confirmarEliminacion(data.password);
            console.log('Contraseña confirmada');
          }
        }
      }
    ]
  });

  await passwordAlert.present();
}

async confirmarEliminacion(password: string): Promise<void> {
  const storedUser = localStorage.getItem('usuario');
  
  if (storedUser) {
    const usuario = JSON.parse(storedUser);

    if (password === usuario.password) {
      const alert = await this.alertController.create({
        header: '¡ATENCIÓN!',
        message: 'Está a punto de eliminar su cuenta. ¿Desea continuar?',
        buttons:[
          {
            text: 'No, mejor no',
            role: 'cancel',
          }, {
            text: 'Sí, bye',
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
    } else {
      this.mostrarAlerta('Error','Contraseña incorrecta');
      console.log('Contraseña incorrecta');
    }
    }
  }

  async mostrarAlerta(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async cambiarContrasena(): Promise<void> {
    const passwordAlert = await this.alertController.create({
      header: 'Ingrese su contraseña actual',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña actual',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: async (data) => {
            if (data.password) {
              await this.verificarContrasenaActual(data.password);
              console.log('Contraseña confirmada');
            }
          }
        }
      ]
    });
  
    await passwordAlert.present();
  }
  
  async verificarContrasenaActual(password: string): Promise<void> {
    const storedUser = localStorage.getItem('usuario');
    
    if (storedUser) {
      const usuario = JSON.parse(storedUser);
  
      if (password === usuario.password) {
        // contraseña actual válida, permitir cambiar la contraseña
        await this.mostrarFormularioCambioContrasena();
      } else {
        // contraseña actual incorrecta, mostrar mensaje de error
        this.mostrarAlerta('Error','Contraseña incorrecta');
        console.log('Contraseña incorrecta');
      }
    }
  }
  
  async mostrarFormularioCambioContrasena(): Promise<void> {
    const nuevaContrasenaAlert = await this.alertController.create({
      header: 'Ingrese su nueva contraseña',
      inputs: [
        {
          name: 'nuevaContrasena',
          type: 'password',
          placeholder: 'Nueva Contraseña',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.nuevaContrasena) {
              // almacena la nueva contraseña en el local storage
              const storedUser = localStorage.getItem('usuario');
              if (storedUser) {
                const usuario = JSON.parse(storedUser);
                usuario.password = data.nuevaContrasena;
                localStorage.setItem('usuario', JSON.stringify(usuario));
                this.mostrarAlerta('Éxito', 'Contraseña cambiada exitosamente.');
              } else {
                // maneja el caso en que no se encuentre informacion del usuario en el almacenamiento local
                this.mostrarAlerta('Error', 'No se encontró información del usuario.');
              }
            } else {
              // maneja el caso en que no se ingrese una nueva contraseña
              this.mostrarAlerta('Error', 'Por favor, ingrese una nueva contraseña.');
            }
          }
        }
      ]
    });
  
    await nuevaContrasenaAlert.present();
  }  
}

