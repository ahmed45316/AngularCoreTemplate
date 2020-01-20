import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupsRoutingModule } from './lookups-routing.module';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { DialogService } from 'primeng/api';
import { AddTestComponent } from './components/test/components/add/add-test.component';
import { CountryComponent } from './components/countries/components/add/country.component';
import { HolidayDateComponent } from './components/holidayDates/components/add/holidayDate.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HolidayDatesComponent } from './components/holidayDates/holidayDates.component';


@NgModule({
  entryComponents: [
    AddTestComponent, CountryComponent, HolidayDateComponent
  ],
  declarations: [
    AddTestComponent,
    TestComponent, CountriesComponent, CountryComponent, HolidayDatesComponent, HolidayDateComponent
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
