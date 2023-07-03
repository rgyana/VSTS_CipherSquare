import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  // cards for observable
  apiData: any;
  cardDetails: any;

  formData: any = new FormData();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService
      .getAdminDashboardData(this.formData)
      .subscribe((data: any) => {
        this.apiData = data;
        this.cardDetails = Object.entries(this.apiData.result);
      });
  }
}
