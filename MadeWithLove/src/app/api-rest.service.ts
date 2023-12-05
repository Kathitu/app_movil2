import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(public http: HttpClient){
  }

  obtenerDatos(){
    return this.http.get("https://nancyb3a.github.io/Test_/usuarios_PGY4121_04.json");
  }

  eliminarEntrada(id: string): void {
    const entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    const nuevasEntradas = entradas.filter((entrada: { id: string; }) => entrada.id !== id);
    localStorage.setItem('entradas', JSON.stringify(nuevasEntradas));
}
}
