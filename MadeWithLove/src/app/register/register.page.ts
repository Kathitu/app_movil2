import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../api-rest.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController,
    public apiService: ApiService) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      email: f.email,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('menu/home');
  }
}

