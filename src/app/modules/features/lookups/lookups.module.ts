import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupsRoutingModule } from './lookups-routing.module';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from '../../shared/shared.module';
import { AddTestComponent } from './components/test/componenets/add/add-test.component';
import { CoreModule } from '../../core/core.module';
import { DialogService } from 'primeng/api';
import { CountryComponent } from './countries/country/country.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  entryComponents : [
    AddTestComponent,CountryComponent
  ],
  declarations: [
    AddTestComponent,
    TestComponent,CountriesComponent,CountryComponent
  ],
  imports: [
    CommonModule,
    LookupsRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    DialogService
  ]
})
export class LookupsModule { }
