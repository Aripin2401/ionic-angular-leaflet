import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletClickPopupPage } from './leaflet-click-popup.page';

const routes: Routes = [
  {
    path: '',
    component: LeafletClickPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeafletClickPopupPageRoutingModule {}
