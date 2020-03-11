import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'ulster',
    loadChildren: () => import('./ulster/ulster.module').then( m => m.UlsterPageModule)
  },
  {
    path: 'munster',
    loadChildren: () => import('./munster/munster.module').then( m => m.MunsterPageModule)
  },
  {
    path: 'connaught',
    loadChildren: () => import('./connaught/connaught.module').then( m => m.ConnaughtPageModule)
  },
  {
    path: 'leinster',
    loadChildren: () => import('./leinster/leinster.module').then( m => m.LeinsterPageModule)
  },
  {
    path: 'leinstercounties',
    loadChildren: () => import('./leinstercounties/leinstercounties.module').then( m => m.LeinstercountiesPageModule)
  },
  {
    path: 'connaught-countries',
    loadChildren: () => import('./connaught-countries/connaught-countries.module').then( m => m.ConnaughtCountriesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
