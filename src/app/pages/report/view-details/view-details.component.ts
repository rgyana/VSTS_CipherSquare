import { TableType1Data } from './../../../core/interfaces/table-type1-data.interface';
import { ModalPreviewComponent } from './../../../features/modal-preview/modal-preview.component';
import { ReportService } from 'src/app/shared/report.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private router: Router, private reportService: ReportService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.reportService.specificRecordDataSub.subscribe({
    //   next: (data: TableType1Data) => {
    //     this.specificRecordData = data;
    //     this.recordData.name = this.specificRecordData.name;
    //     this.recordData.mobileNumber = this.specificRecordData.mobile;
    //   }
    // })

    // ? using resolver
    this.recordData.name = this.specificRecordData.name;
    this.recordData.mobileNumber = this.specificRecordData.mobile;
  }

  // specificRecordData!: TableType1Data;

  // ? using resolver - its automatically getting subscribed by ActivatedRoute.snapshot.data
  specificRecordData = inject(ActivatedRoute).snapshot.data['data'];

  recordData: {
    name: string,
    emailId: string,
    mobileNumber: string,
    parentName: string,
    gender: string,
    dob: string,
    qualification: string,
    physicallyHandicapped: boolean,
    alternativeOccupation: boolean,
    provider: boolean,
    entityType: boolean,
    alternativeNumber: string | boolean,
    residentialFullAddress: string,
    residentialLandmark: string,
    residentialPinCode: string,
    residentialDistrict: string,
    residentialCity: string,
    residentialState: string,
    isBusinessDetailsSame: boolean,
    businessFullAddress: string,
    businessLandmark: string,
    businessPinCode: string,
    businessDistrict: string,
    businessCity: string,
    businessState: string,
    proofOfIdentity: string | string[],
    otherProofSpecify: string | boolean,
    proofOfAddress: string | string[],
    accountType: string,
    bankName: string,
    ifscCode: string,
    accountNumber: string,
    matchName1: string,
    matchName2: string,
    matchBetween: string,
    matchReason: string,
    matchResult: string,
    matchScore: string
  } = {
      name: 'Ranjan Routh',
      emailId: 'ranjan@gmail.com',
      mobileNumber: '+91-9291929394',
      parentName: 'Gyana Routh',
      gender: 'Female',
      dob: '12/12/2000',
      qualification: 'B.Tech',
      physicallyHandicapped: false,
      alternativeOccupation: false,
      provider: false,
      entityType: false,
      alternativeNumber: '9048429877',
      residentialFullAddress: 'Rose Villa, Kendrapada',
      residentialLandmark: 'near Little Flower School',
      residentialPinCode: '691523',
      residentialDistrict: 'Kollam',
      residentialCity: 'Korapakkam',
      residentialState: 'Goa',
      isBusinessDetailsSame: true,
      businessFullAddress: 'Rose Villa, Kendrapada',
      businessLandmark: 'near Little Flower School',
      businessPinCode: '691523',
      businessDistrict: 'Kollam',
      businessCity: 'Korapakkam',
      businessState: 'Goa',
      proofOfIdentity: ['Pan Card', 'Aadhaar Card'],
      otherProofSpecify: 'Kirti Nagar',
      proofOfAddress: ['Pan Card', 'Aadhaar Card', 'Driving Licence'],
      accountType: 'SAVINGS',
      bankName: 'State Bank of India',
      ifscCode: 'SBIN008787',
      accountNumber: '7862187231897',
      matchName1: 'Sachin',
      matchName2: 'Rachin',
      matchBetween: '-----',
      matchReason: '-----',
      matchResult: 'SAVING',
      matchScore: 'SAVING'
    }

  getRecordData() {
    return this.recordData;
  }

  goToAdminReportPage() {
    this.router.navigate(['/reports']);
  }

  previewRecordBtnClicked() {
    const modalRef = this.modalService.open(ModalPreviewComponent, { centered: true, backdropClass: 'no-zindex', size: 'xl', animation: true, scrollable: true });
    modalRef.componentInstance.modalContent = { recordData: this.recordData };
  }

}
