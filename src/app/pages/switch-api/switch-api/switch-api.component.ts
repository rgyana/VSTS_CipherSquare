import { Component, OnInit } from '@angular/core';
import { SwitchApiService } from 'src/app/shared/switch-api.service';

@Component({
  selector: 'app-switch-api',
  templateUrl: './switch-api.component.html',
  styleUrls: ['./switch-api.component.css'],
})
export class SwitchApiComponent implements OnInit {
  adminSwitchAPIResponse!: {
    method: string;
    signzy: string;
    paysprint: string;
    id: number;
    value: string;
  }[];

  fetchApiArray: string[] = [];

  constructor(private SwitchAPIService: SwitchApiService) {}

  ngOnInit(): void {
    this.SwitchAPIService.getAdminSwithAPI().subscribe((response: any) => {
      this.adminSwitchAPIResponse = response.result;
      // console.log(this.adminSwitchAPIResponse);

      // condtion for the signzy and paysprint
      for (let i = 0; i < this.adminSwitchAPIResponse.length; i++) {
        if (this.adminSwitchAPIResponse[i].signzy === '1') {
          this.fetchApiArray.push('signzy');
        } else {
          this.fetchApiArray.push('paysprint');
        }
      }
      // console.log(this.fetchApiArray);
    });
  }
}
