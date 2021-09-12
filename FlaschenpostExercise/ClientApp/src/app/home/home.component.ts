import { Component, OnInit } from '@angular/core';
import { BottleInfoDTO } from '../_model/bottleInfoDTO';
import { AlertService } from '../_services/alert.service';
import { BottleService } from '../_services/bottle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  viewMode: boolean = true;
  isFiltred: boolean = false;
  loading: boolean = true;
  order: string = "default";
  bottles: BottleInfoDTO[];

  constructor(private alertService: AlertService,
    private bottleService: BottleService) {

  }

  ngOnInit(): void {
    this.bottleService.getAllBottleInfos().subscribe(r => {
      this.bottles = r;
      this.loading = false;
    }, error => {
      this.alertService.error(error.error.message);
      this.loading = !this.loading;
    });
  }

  filterBottles() {
    this.isFiltred = !this.isFiltred;
    this.loading = !this.loading;

    this.bottleService.getSortedAndSortedBottleInfos(this.order, this.isFiltred).subscribe(r => {
      this.bottles = r;
      this.loading = !this.loading;
      this.alertService.success("Updated");
    }, error => {
      this.alertService.error(error.error.message);
      this.loading = !this.loading;
    });
  }

  sortBottlesByPrice(order: string) {
    this.order = order;
    this.loading = !this.loading;

    this.bottleService.getSortedAndSortedBottleInfos(order, this.isFiltred).subscribe(r => {
      this.bottles = r;
      this.loading = !this.loading;
      this.alertService.success("Updated");
    }, error => {
      this.alertService.error(error.error.message);
      this.loading = !this.loading;
    });
  }
}
