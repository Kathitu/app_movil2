import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit {


  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength}`;
  }

  @Input() descperfil: {
    nombre: string,
    descripcion: string,
  } = { nombre: '', descripcion: ''};


  @Output() eventoGuardar: EventEmitter<{
    nombre: string,
    descripcion: string,
  }> = new EventEmitter<{
    nombre: string,
    descripcion: string,
  }>();


  constructor(private vibration: Vibration) {}


  ngOnInit() {}


  vibrar() {
    this.vibration.vibrate(200);
  }


  guardarDescripcion() {
    this.eventoGuardar.emit(this.descperfil);
  }
}


