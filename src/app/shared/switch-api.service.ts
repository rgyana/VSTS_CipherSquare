import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class SwitchApiService {
  constructor(private webRequestService: WebrequestService) {}

  getAdminSwithAPI() {
    return this.webRequestService.get('getswitchapiSettings');
  }
}
