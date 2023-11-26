import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  usuarios: any[] = [];

  constructor(public service: ApiService) {
    this.service.obtenerDatos()
      .subscribe(
        (data: any) => {
          console.log(data);
          this.usuarios = data;
        },
        (error) => {
          console.log(error);
        }
      )
  }

  ngOnInit() {
  }

}
