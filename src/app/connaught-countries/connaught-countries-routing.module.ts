import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtCountriesPage } from './connaught-countries.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtCountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtCountriesPageRoutingModule {}
