import { OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LocalizationService } from '../../core/services/localization/localization.service';
import { TableCoreService } from '../../shared/components/data-table/services/table-core.service';
import { Shell } from './shell';
import { HttpService } from '../../core/services/http/http.service';
import { AlertService } from '../../core/services/alert/alert.service';
import { MatDialogRef } from '@angular/material';

export abstract class BaseEditComponent implements OnInit {

  isNew = true;
  url;
  form: FormGroup;
  abstract get Service(): HttpService;
  get localize(): LocalizationService { return Shell.Injector.get(LocalizationService); }
  get Alert(): AlertService { return Shell.Injector.get(AlertService); }
  get Route(): Router { return Shell.Injector.get(Router); }
  get TableCore(): TableCoreService { return Shell.Injector.get(TableCoreService); }
  constructor(public dialogRef: MatDialogRef<any>) { }


  ngOnInit(): void {
  }
  close(form) {
    this.dialogRef.close(form);
    this.dialogRef.afterClosed().subscribe((data: any) => {
      console.log('----data from closing', data);
      console.log('----------form', form);
      if (form == null || form === undefined) {
        return false;
      }
      if (form === '') {
        return false;
      }
      if (this.isNew) {
        this.submitNew(form);
      } else {
        this.submitUpdate(form);
      }
    });

  }

  submitNew(model: any): void {
    this.Service.postReq('Add', model).subscribe((result: any) => {
      console.log('-------result of add', result);
      if (result != null) {
        return false;
      }
      --this.TableCore.pageOptions.offset;
      this.TableCore.reRenderTable(this.url);

    }, error => {
      // this.Alert.openAlert('Error Adding'); translate it please
    });
  }

  submitUpdate(model: any): void {
    this.Service.putReq('Update', model).subscribe((result: any) => {
      console.log('-------result of update', result);
      if (result != null) {
        return false;
      }
      --this.TableCore.pageOptions.offset;
      this.TableCore.reRenderTable(this.url);
      // this.Alert.openAlert('Updated Successfully');   translate it please

    }, error => {
      // this.Alert.openAlert('Error Updating'); translate it please
    });
  }



}
