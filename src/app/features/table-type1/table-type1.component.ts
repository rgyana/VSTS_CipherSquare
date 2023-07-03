import { ReportService } from 'src/app/shared/report.service';
import { Router } from '@angular/router';
import { ModalType1Component } from '../modal-type1/modal-type1.component';
import { ExcelService } from './../../shared/excel.service';
import { DataStatus } from './../../core/enums/data-status.enum';
import { Component, Input, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-table-type1',
  templateUrl: './table-type1.component.html',
  styleUrls: ['./table-type1.component.css']
})
export class TableType1Component implements OnInit {

  constructor(private excelService: ExcelService, private modalService: NgbModal, private router: Router, private reportService: ReportService) { }

  ngOnInit(): void {
  }

  @Input()
  reportDataResult!: any | {
    "current_page": number;
    "data": [any];
    "first_page_url": string | null;
    "from": number;
    "last_page": number;
    "last_page_url": string | null;
    "next_page_url": null;
    "path": string | null;
    "per_page": number;
    "prev_page_url": string | null;
    "to": number;
    "total": number;
  };

  @Output()
  refreshBtnClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  refreshData() {
    this.refreshBtnClicked.emit(true);
  }

  editRecordBtnClicked(data: any) {
    const id = data.id;

    this.reportService.getKycData(id).subscribe({
      next: (kycData) => {
        // console.log(kycData);

        const modalRef = this.modalService.open(ModalType1Component, { centered: true, backdropClass: 'no-zindex', animation: true, scrollable: true, windowClass: "myCustomModalClass", backdrop: 'static' });
        modalRef.componentInstance.modalData = { heading: "Update KYC Form", primaryBtnName: "Unlock", secondaryBtnName: "Reject", contentData: kycData };
      }
    });

    // let combinedAapiModalData = forkJoin([this.reportService.getKycData(id), this.reportService.getSecondaryProof(id), this.reportService.getPanFetchResponse(id), this.reportService.getPanExtractionResponse(id), this.reportService.getVideoVerificationResponse(id), this.reportService.getForgeryResponse(id), this.reportService.getImageQualityResponse(id), this.reportService.getNameMatchResponse(id), this.reportService.getBankVerificationResponse(id), this.reportService.getAllBankVerificationResponse(id)]);

    // combinedAapiModalData.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     const [kycDataResponse, secondaryProofResponse, panFetchResponse, panExtractionResponse, videoVerificationResponse, forgeryResponse, imageQualityResponse, nameMatchResponse, bankVerificationResponse, allBankVerificationResponse] = res;

    //     const modalRef = this.modalService.open(ModalType1Component, { centered: true, backdropClass: 'no-zindex', size: 'xl', animation: true, scrollable: true });
    //     modalRef.componentInstance.modalData = {
    //       heading: "Update KYC Form", primaryBtnName: "Unlock", secondaryBtnName: "Reject", contentData: {
    //         'kycDataResponse': kycDataResponse,
    //         'secondaryProofResponse': secondaryProofResponse,
    //         'panFetchResponse': panFetchResponse,
    //         'panExtractionResponse': panExtractionResponse,
    //         'videoVerificationResponse': videoVerificationResponse,
    //         'forgeryResponse': forgeryResponse,
    //         'imageQualityResponse': imageQualityResponse,
    //         'nameMatchResponse': nameMatchResponse,
    //         'bankVerificationResponse': bankVerificationResponse,
    //         'allBankVerificationResponse': allBankVerificationResponse
    //       }
    //     };
    //   }
    // });

  }

  goToFirstPageBtnClicked() { }

  goToPrevPageBtnClicked() { }

  goToNextPageBtnClicked() { }

  goToLastPageBtnClicked() { }

















  readonly DataStatus = DataStatus;

  exportToExcel(dataArray: any) {
    if (dataArray) {
      console.log(`Exporting to Excel`);
      this.excelService.exportAsExcelFile(dataArray, 'sample');
    }
  }

  viewRecordBtnClicked(data: any) {
    this.reportService.specificRecordDataSub.next(data);
    this.router.navigate(['/reports/view-details']);
  }


}
