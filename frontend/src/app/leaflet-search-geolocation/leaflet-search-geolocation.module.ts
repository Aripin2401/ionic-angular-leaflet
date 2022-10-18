import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafletSearchGeolocationPageRoutingModule } from './leaflet-search-geolocation-routing.module';

import { LeafletSearchGeolocationPage } from './leaflet-search-geolocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletSearchGeolocationPageRoutingModule
  ],
  declarations: [LeafletSearchGeolocationPage]
})
export class LeafletSearchGeolocationPageModule {}
