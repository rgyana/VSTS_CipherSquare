import { SortPanelComponent } from './../../../features/sort-panel/sort-panel.component';
import { ReportService } from './../../../shared/report.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  constructor(private reportService: ReportService) {

    this.appendDefaultValuesInFormData();
    this.reportData$ = reportService.getReportData(this.formData);
  }

  ngOnInit(): void {
  }

  reportData$!: Observable<any>;
  formData: any = new FormData();

  @ViewChild(SortPanelComponent)
  sortPanelComponent!: SortPanelComponent;

  appendDefaultValuesInFormData() {
    this.formData.append('fromdate', '');
    this.formData.append('todate', '');
    this.formData.append('kycStatus', '');
    this.formData.append('kycMode', '');
    this.formData.append('page', '');
    this.formData.append('frommodifieddate', '');
    this.formData.append('modifiedtodate', '');
    this.formData.append('rcodetodate', '');
    this.formData.append('rcodefromdate', '');
    this.formData.append('uservalue', '');
    this.formData.append('sortby', 'created_at');
    this.formData.append('sortdata', 'desc');
  }

  fetchRefreshBtnClickedEmitted(flag: boolean) {
    this.sortPanelComponent.restFiterForm();
    console.log(`Refreshing Report Data`);
    this.appendDefaultValuesInFormData();
    this.reportData$ = this.reportService.getReportData(this.formData);
  }


  fetchFilterFormValue(filterCriteria: any) {
    // console.log(filterCriteria);
    this.formData.append('fromdate', filterCriteria.fromdate);
    this.formData.append('todate', filterCriteria.todate);
    this.formData.append('kycStatus', filterCriteria.kycStatus);
    this.formData.append('kycMode', filterCriteria.kycMode);
    this.formData.append('page', filterCriteria.page);
    this.formData.append('frommodifieddate', filterCriteria.frommodifieddate);
    this.formData.append('modifiedtodate', filterCriteria.modifiedtodate);
    this.formData.append('rcodetodate', filterCriteria.rcodetodate);
    this.formData.append('rcodefromdate', filterCriteria.rcodefromdate);
    this.formData.append('uservalue', filterCriteria.uservalue);
    this.formData.append('sortby', filterCriteria.sortby);
    this.formData.append('sortdata', filterCriteria.sortdata);
    this.reportData$ = this.reportService.getReportData(this.formData);
  }







































}
