import { Component } from '@angular/core';
import { SnackBarService } from './_services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private snackBarService: SnackBarService) {
    this.snackBarService.init();
  }
}
