import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'leaflet-routing-machine',
    loadChildren: () => import('./leaflet-routing-machine/leaflet.module').then( m => m.LeafletPageModule)
  },
  {
    path: 'leaflet-search-geolocation',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./leaflet-search-geolocation/leaflet-search-geolocation.module').then( m => m.LeafletSearchGeolocationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
