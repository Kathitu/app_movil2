import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
//import { FingerprintAIO} from '@awesome-cordova-plugins/fingerprint-aio/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController, ) { //private fingerprintaio: FingerprintAIO
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]), // Agregar validación de email
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  //  this.autenticar();
  }

  //autenticar(){
  //  this.fingerprintaio.isAvailable().then(() => {
  //    this.fingerprintaio.show({}).then((val) => {
  //      alert(JSON.stringify(val));
  //    },(error) => {
  //      alert(JSON.stringify(error));
  //    })
  //  }, (error) => {
  //    alert("Error en auntenticar huella dacticar");
  //  })
  //}

  async ingresar() {
    var f = this.formularioLogin.value;
  
    // Obtener el valor de 'usuario' desde localStorage
    var usuarioString = localStorage.getItem('usuario');
  
    if (usuarioString) { // Comprobar si usuarioString no es nulo
      var usuario = JSON.parse(usuarioString);
  
      if (usuario.nombre == f.nombre && usuario.email == f.email && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('menu/home');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste no son correctos',
          buttons: ['Aceptar']
        });
  
        await alert.present();
      }
    }
  }
}
