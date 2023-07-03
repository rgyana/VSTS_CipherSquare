import { ReportService } from 'src/app/shared/report.service';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';

@Component({
  selector: 'app-bank-verification',
  templateUrl: './bank-verification.component.html',
  styleUrls: ['./bank-verification.component.css'],
})
export class BankVerificationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private reportService: ReportService) { }

  ngOnInit(): void {
    this.updatedBankInformation.patchValue({
      userAccountType: this.modalCompData?.result?.bank_details?.bankAccountType,
      userBankName: this.modalCompData?.result?.bank_details?.bankName,
      userIFSCCode: this.modalCompData?.result?.bank_details?.ifscCode,
      userAccountNumber: this.modalCompData?.result?.bank_details?.accountNumber,
      userConfirmAccountNumber: this.modalCompData?.result?.bank_details?.accountNumber,
    })
  }

  @Input()
  modalCompData: any;

  @Input()
  bankVerificationResponse: any;

  @Input()
  passbookThumbPhotoSrc: any;

  isUpdatingBankDetails: boolean = false;

  updatedBankInformation = this.formBuilder.group({
    userAccountType: [''],
    userBankName: [''],
    userIFSCCode: [''],
    userAccountNumber: [''],
    userConfirmAccountNumber: [''],
  });

  onEditBtnClicked() {
    this.isUpdatingBankDetails = true;
  }

  onUpdateBtnClicked() {
    this.isUpdatingBankDetails = false;
  }

  openPhotoInNewTab(fileName: string, tabTitle: string) {
    this.reportService.openInNewTab(fileName, tabTitle);
  }
}
