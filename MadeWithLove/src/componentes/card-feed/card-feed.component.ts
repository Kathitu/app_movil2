import { Component, OnInit } from '@angular/core';
import {Vibration} from '@awesome-cordova-plugins/vibration/ngx'

@Component({
  selector: 'app-card-feed',
  templateUrl: './card-feed.component.html',
  styleUrls: ['./card-feed.component.scss'],
})
export class CardFeedComponent  implements OnInit {

  constructor(private vibration: Vibration) { }

  ngOnInit() {}

  vibrar() {
    this.vibration.vibrate(200);
  }

}
