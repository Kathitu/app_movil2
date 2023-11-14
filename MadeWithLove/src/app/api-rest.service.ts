import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient){
    console.log("Soy APIRest")
  }

  //private db!: SQLiteObject;
  private isOpen!: boolean;

  private nombreUsuario: string = '';

  setNombreUsuario(nombre: string) {
    this.nombreUsuario = nombre;
  }

  getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  obtenerDatos(){
    return this.http.get("https://nancyb3a.github.io/Test_/usuarios_PGY4121_04.json")
  }
}
