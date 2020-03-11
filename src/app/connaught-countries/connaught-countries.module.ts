import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtCountriesPageRoutingModule } from './connaught-countries-routing.module';

import { ConnaughtCountriesPage } from './connaught-countries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtCountriesPageRoutingModule
  ],
  exports:[ConnaughtCountriesPage],
  declarations: [ConnaughtCountriesPage]
  
})
export class ConnaughtCountriesPageModule {}
