import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ApiService } from './api-rest.service';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { FingerprintAIO} from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { FormsModule } from '@angular/forms';
import { ContactoPageModule } from './contacto/contacto.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, IonicModule, ContactoPageModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ApiService, SQLite, Vibration, FingerprintAIO],
  bootstrap: [AppComponent],
})
export class AppModule {}
