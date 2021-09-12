import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { AlertComponent } from "../alert/alert.component";
import { AlertService } from "./alert.service";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    constructor(
        private snackBar: MatSnackBar,
        private alertService: AlertService
    ) {

    }

    openSnackBar(message: string, type: boolean) {
        var messageType: string;
        if (type) {
            messageType = 'snackbar-panel-success'
        }
        else {
            messageType = 'snackbar-panel-error'
        }
        this.snackBar.openFromComponent(AlertComponent, {
            duration: 3500,
            verticalPosition: "bottom",
            horizontalPosition: "right",
            data: message,
            panelClass: [messageType],
        });
    }

    init() {
        this.alertService.getAlert().subscribe(alert => {
            if (alert != null) {
                if (alert.type === 'success') {
                    this.openSnackBar(alert.text, true);
                }
                if (alert.type === 'error') {
                    this.openSnackBar(alert.text, false);
                }
            }
        });
    }
}