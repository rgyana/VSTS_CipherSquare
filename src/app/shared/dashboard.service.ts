import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private webRequestService: WebrequestService) {}

  getAdminDashboardData(formData: FormData) {
    return this.webRequestService.post('adminDashboard', formData);
  }
}
