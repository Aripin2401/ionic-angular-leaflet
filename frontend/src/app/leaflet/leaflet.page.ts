import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-sidebar-v2';
import {Geocoder, geocoders} from 'leaflet-control-geocoder';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage {
  map: L.Map;
  constructor() { }

  ionViewDidEnter() {
    this.map = L.map('map').setView([-6.934262277308666, 107.62608039631637], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);

    // const GeocoderControl = new Geocoder();
    // GeocoderControl.addTo(this.map);
    // GeocoderControl.on('markgeocode', function (e) {
    // console.log(e);
    // });

      L.Routing.control({ 
        //Adding waypoints
        waypoints: [
          L.latLng(-6.934262277308666, 107.62608039631637),
          L.latLng(-6.934262277308666, 107.62608039631637)
        ],
        //Adding a route planner
        routeWhileDragging: true,
        //Adding a route summary
        show: true,
        //Adding a sidebar
        collapsible: true,        
    }).addTo(this.map);
  }

}
