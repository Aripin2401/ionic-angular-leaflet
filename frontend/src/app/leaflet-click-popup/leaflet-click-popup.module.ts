import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafletClickPopupPageRoutingModule } from './leaflet-click-popup-routing.module';

import { LeafletClickPopupPage } from './leaflet-click-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletClickPopupPageRoutingModule
  ],
  declarations: [LeafletClickPopupPage]
})
export class LeafletClickPopupPageModule {}
