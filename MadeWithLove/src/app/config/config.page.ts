import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-rest.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  usuario: any;

  constructor(private router: Router, private apiService: ApiService) {
    const extras = this.router.getCurrentNavigation()?.extras.state;
    if (extras && 'usuario' in extras) {
      this.usuario = extras['usuario'];
    }
  }

  ngOnInit() {
  }

  eliminarUsuario() {
    this.apiService.eliminarUsuario();
  }
}
