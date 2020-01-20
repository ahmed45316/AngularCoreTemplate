import { OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../core/services/http/http.service';
import { LocalizationService } from '../../core/services/localization/localization.service';
import { Shell } from './shell';
import { AlertService } from '../../core/services/alert/alert.service';
import { DialogService } from 'primeng/api';
import { MatDialog } from '@angular/material';
import { runInThisContext } from 'vm';

export abstract class BaseListComponent implements OnInit {

  abstract get Service(): HttpService;
  //abstract get Dialog(): DialogService;
  get localize(): LocalizationService { return Shell.Injector.get(LocalizationService); }
  get Alert(): AlertService { return Shell.Injector.get(AlertService); }
  get Route(): Router { return Shell.Injector.get(Router); }
  get MatDialog(): MatDialog { return Shell.Injector.get(MatDialog) };
  @Output() addClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(public dialog: MatDialog) {
    console.log(this.dialog);
  }

  ngOnInit(): void {
  }

  add(dialog: any, data: any, width = '500px') {
    this.openDialog(dialog , data , width);
  }
  protected openDialog(dialog: any , data: any , width: any): void {
    this.dialog.open(dialog, {
      width,
      data,
    });
  }

  // add(model: any, dialog: any, header, width = 'auto') {
  //   this.openDialog(model, dialog, header, width);
  // }

  // openViewDetail(model: any, dialog: any, header, width = 'auto') {
  //   this.openDialog(model, dialog, header, width)
  // }

  // protected openDialog(model: any, dialog: any, header, width): void {

  //   this.Dialog.open(dialog, {
  //     header: this.localize.translate.instant(header),
  //     width: width,
  //     rtl: false,
  //     //styleClass: 'dialogscroll',
  //     data: model ? model : ''
  //   });
  // }
}
