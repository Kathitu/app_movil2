import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit {
  perfilForm!: FormGroup;
  nuevaDescripcion: string = '';
  nuevoNombre: string = '';

  constructor(private formBuilder: FormBuilder, private Apiservice: ApiService, private router: Router) {}

  guardarDescripcion(): void {
    this.Apiservice.setDescripcion(this.nuevaDescripcion);
  }

  guardarNombre(): void {
    this.Apiservice.setNombre(this.nuevoNombre);
  }

  ngOnInit() {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.perfilForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required]],
      // Agrega más campos según sea necesario
    });
  }

  guardarCambios() {
    if (this.perfilForm.valid) {
      // Guarda la información en el servicio
      this.Apiservice.setNombre(this.perfilForm.value.nombre);
      this.Apiservice.setDescripcion(this.perfilForm.value.descripcion);
    
      // Navega a la página de perfil después de guardar
      this.router.navigate(['/miperfil']);
  
      // También puedes llamar a los métodos guardarNombre y guardarDescripcion aquí si es necesario
    } else {
      console.log('Formulario no válido. Por favor, revisa los campos.');
    }
  }
}

