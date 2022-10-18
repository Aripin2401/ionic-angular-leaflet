import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletSearchGeolocationPage } from './leaflet-search-geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: LeafletSearchGeolocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeafletSearchGeolocationPageRoutingModule {}
