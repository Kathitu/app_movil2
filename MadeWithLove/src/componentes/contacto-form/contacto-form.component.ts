import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.scss'],
})
export class ContactoFormComponent {
  formData = {
    from_name: '',
    message: '',
    email_id: '',
  
  };

  submitForm() {
    const serviceID = 'default_service';
    const templateID = 'template_a1mdr5j';

    emailjs.send(serviceID, templateID, this.formData).then(
      (response: EmailJSResponseStatus) => {
        console.log('Mensaje enviado exitosamente', response);
      },
      (error) => {
        console.error('Error al enviar mensaje:', error);
      }
    );
  }
}


