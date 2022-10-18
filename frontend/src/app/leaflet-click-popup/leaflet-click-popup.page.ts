import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-click-popup',
  templateUrl: './leaflet-click-popup.page.html',
  styleUrls: ['./leaflet-click-popup.page.scss'],
})
export class LeafletClickPopupPage{

  map: L.Map;

  constructor() { }

  ionViewDidEnter() {
    this.map = L.map('map').setView([-6.957761928333558, 107.60831075345683], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);
  }

}
