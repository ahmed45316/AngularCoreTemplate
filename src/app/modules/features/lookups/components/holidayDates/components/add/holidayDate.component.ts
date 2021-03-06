import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { BaseEditComponent } from 'src/app/modules/base/components/BaseEditComponent';
import { Shell } from 'src/app/modules/base/components/shell';
import { Holiday } from 'src/app/modules/core/services/models/Holiday';
import { HolidayDatesService } from '../../Services/holidayDates';
import { HolidayDate } from 'src/app/modules/core/services/models/HolidayDate';
import { Country } from 'src/app/modules/core/services/models/country';

@Component({
  selector: 'app-holiday-date',
  templateUrl: './holidayDate.component.html',
  styleUrls: ['./holidayDate.component.scss']
})
export class HolidayDateComponent extends BaseEditComponent implements OnInit {

  model: HolidayDate = {};
  id: string;
  url = 'HolidayDates/GetAllPaged';
  get Service(): HolidayDatesService { return Shell.Injector.get(HolidayDatesService); }
  get Ref(): DynamicDialogRef { return this.ref; }
  get Config(): DynamicDialogConfig { return this.config; }
  countries: Country[];
  holidays: Holiday[];

  constructor(
    fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) {
    super();
    if (this.config.data) {
      this.model = this.config.data;
      this.isNew = false;
    }
    this.form = fb.group({
      id: [this.model.id],
      holidayId: [this.model.holidayId, Validators.required],
      startDate: [this.isNew ? this.model.startDate : new Date(this.model.startDate), Validators.required],
      endDate: [this.isNew ? this.model.endDate : new Date(this.model.endDate), Validators.required],
      countryId: [this.model.countryId, Validators.required],
      notes: [this.model.notes],
    });
  }

  ngOnInit() {
    this.getLookups();
  }

  getLookups(): void {
    this.Service.getLookup()
      .subscribe(data => {
        this.countries = data[0];
        this.holidays = data[1];
      });
  }

}
