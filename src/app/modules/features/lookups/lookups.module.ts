import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupsRoutingModule } from './lookups-routing.module';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from '../../shared/shared.module';
import { AddTestComponent } from './components/test/componenets/add/add-test.component';
import { CoreModule } from '../../core/core.module';
import { DialogService } from 'primeng/api';


@NgModule({
  entryComponents : [
    AddTestComponent
  ],
  declarations: [
    AddTestComponent,
    TestComponent
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
