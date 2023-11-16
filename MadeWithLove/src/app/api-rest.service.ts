import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private descripcionSubject = new Subject<string>();
  descripcion$: Observable<string> = this.descripcionSubject.asObservable();

  private nombreSubject = new Subject<string>();
  nombre$: Observable<string> = this.nombreSubject.asObservable();
  private nombreUsuario: string = '';

  setNombreUsuario(nombre: string) {
    this.nombreUsuario = nombre;
  }

  getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  constructor(public http: HttpClient){
    console.log("Soy APIRest");
  }

  obtenerDatos(){
    return this.http.get("https://nancyb3a.github.io/Test_/usuarios_PGY4121_04.json");
  }

  setDescripcion(descripcion: string): void {
    this.descripcionSubject.next(descripcion);
  }

  setNombre(nombre: string): void {
    this.nombreSubject.next(nombre);
  }
}

