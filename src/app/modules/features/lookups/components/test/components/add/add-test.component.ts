import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { TestService } from '../../services/test.service';
import { BaseEditComponent } from 'src/app/modules/base/components/BaseEditComponent';
import { Shell } from 'src/app/modules/base/components/shell';
import { Country } from 'src/app/modules/core/services/models/country';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add.test.component.scss'],
})
export class AddTestComponent extends BaseEditComponent {
  model: Country = {};
  id: string;
  url = 'countries/GetAllPaged';
  get Service(): TestService { return Shell.Injector.get(TestService); }
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(dialogRef);
    if (this.data) {
      this.model = this.data;
      this.isNew = false;
    }
    this.form = fb.group({
      id: [this.model.id],
      code: [this.model.code],
      nameFl: [this.model.nameFl, Validators.required],
      nameSl: [this.model.nameSl, Validators.required],
      createdDate: [this.model.createdDate]
    });
  }

}
