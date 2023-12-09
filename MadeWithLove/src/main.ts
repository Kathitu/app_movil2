import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import emailjs from 'emailjs-com';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

if (environment.production) {
  enableProdMode();
}

emailjs.init('6lxuB3oaehvjtDqLG');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  // Call the element loader before the render call
defineCustomElements(window);
