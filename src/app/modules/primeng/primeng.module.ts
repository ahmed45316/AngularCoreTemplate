import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule, Paginator } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [],
  imports: [
    TableModule,
    CalendarModule,
    DynamicDialogModule,
    ToastModule,
    PaginatorModule,
    DropdownModule,
    ConfirmDialogModule,
    ButtonModule,
    MultiSelectModule,
    CheckboxModule,
    AutoCompleteModule
  ],
  exports: [
    TableModule,
    Paginator,
    DynamicDialogModule,
    ToastModule,
    DropdownModule,
    ConfirmDialogModule,
    ButtonModule,
    MultiSelectModule,
    CheckboxModule,
    CalendarModule,
    AutoCompleteModule
  ]
})
export class PrimengModule { }
