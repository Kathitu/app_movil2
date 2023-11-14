import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Vibration} from '@awesome-cordova-plugins/vibration/ngx'

@Component({
  selector: 'app-card-mipublicacion',
  templateUrl: './card-mipublicacion.component.html',
  styleUrls: ['./card-mipublicacion.component.scss'],
})
export class CardMipublicacionComponent  implements OnInit {
  @Input() entrada: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  } = { fecha: '', fechaTexto: '', texto: '' };

  @Output() eventoGuardar: EventEmitter<{
    fecha: string;
    fechaTexto: string;
    texto: string;
  }> = new EventEmitter<{
    fecha: string;
    fechaTexto: string;
    texto: string;
  }>();

  constructor(private vibration: Vibration) { }

  ngOnInit() {}

  vibrar() {
    this.vibration.vibrate(200);
  }

  guardar() {
    this.eventoGuardar.emit(this.entrada);

    // Comprobar si 'entradas' existe en el localStorage
    const entradasGuardadas: any[] = JSON.parse(localStorage.getItem('entradas') || '[]');
    
    const entradaIndex = entradasGuardadas.findIndex((e: any) => e.fecha === this.entrada.fecha);
  
    if (entradaIndex !== -1) {
      entradasGuardadas[entradaIndex] = this.entrada;
    } else {
      entradasGuardadas.push(this.entrada);
    }
  
    localStorage.setItem('entradas', JSON.stringify(entradasGuardadas));
  }

}
