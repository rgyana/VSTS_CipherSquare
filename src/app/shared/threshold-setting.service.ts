import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class ThresholdSettingService {
  constructor(private webRequestService: WebrequestService) {}

  getSettingsData() {
    return this.webRequestService.get('getThresholds');
  }
}
