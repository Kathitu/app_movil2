import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-card-mipublicacion',
  templateUrl: './card-mipublicacion.component.html',
  styleUrls: ['./card-mipublicacion.component.scss'],
})
export class CardMipublicacionComponent implements OnInit {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength}`;
  }

  @Input() entrada: {
    id: string,
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  } = { id: '', fecha: '', fechaTexto: '', titulo: '', ingredientes:'', preparacion: ''};

  @Output() eventoGuardar: EventEmitter<{
    id: string,
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  }> = new EventEmitter<{
    id: string,
    fecha: string,
    fechaTexto: string,
    titulo: string,
    ingredientes: string,
    preparacion: string
  }>();

  constructor(private vibration: Vibration) { }

  ngOnInit() { }

  vibrar() {
    this.vibration.vibrate(200);
  }

  guardarPublicacion() {
    this.eventoGuardar.emit(this.entrada);
  }
}

