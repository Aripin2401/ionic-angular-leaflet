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
    this.map = L.map('map').setView([-6.957761928333558, 107.60831075345683], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);

    //add marker on location map
    L.marker([-6.957761928333558, 107.60831075345683]).addTo(this.map);
    
    //add click on map with marker
    this.map.on('click', (e) => {
      const marker = L.marker(e.latlng).addTo(this.map);

      //update marker location with api
      

      L.Routing.control({ 
        //Adding waypoints
        waypoints: [
          L.latLng(-6.957761928333558, 107.60831075345683),
          L.latLng(e.latlng.lat, e.latlng.lng)
        ],
        //Adding a route planner
        routeWhileDragging: true,
        //Adding a route summary
        show: true,
        //Adding a sidebar
        collapsible: true,        
    }).on('routesfound', function(e) {
        console.log(e);
        e.routes[0].coordinates.forEach(function(coord, index) {
          setTimeout(function() {
            marker.setLatLng([coord.lat, coord.lng]);
          }, index * 100);
        })
        }).addTo(this.map);
    });

  }

}