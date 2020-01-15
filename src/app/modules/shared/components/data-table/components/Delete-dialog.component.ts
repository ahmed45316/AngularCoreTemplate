import { Component, OnInit } from '@angular/core';
//import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog/public_api';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: 'delete-modal.component.html',
    styleUrls: [],
})
export class DeleteDialogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    // onNoClick(): void {
    //     this.ref.close();
    // }

    // onYesClick(): void {
    //     this.ref.close({ data: this.config.data });
    // }
}

export interface DialogData {
    id: string;
}
