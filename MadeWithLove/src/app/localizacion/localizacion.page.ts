import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.page.html',
  styleUrls: ['./localizacion.page.scss'],
  providers: [ Geolocation ]
})
export class LocalizacionPage implements OnInit {

  latitude: number | undefined;
  longitude: number | undefined;

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
