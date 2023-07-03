import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';

@Component({
  selector: 'app-kyc-mode',
  templateUrl: './kyc-mode.component.html',
  styleUrls: ['./kyc-mode.component.css']
})
export class KycModeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateKYCModeForm.patchValue({
      userKYCMode: this.modalCompData?.result?.kycStatus?.kyc_mode
    })
  }

  @Input()
  modalCompData: any;

  isUpdatingKYCMode: boolean = false;

  updateKYCModeForm = this.formBuilder.group({
    userKYCMode: ['']
  });

  onEditBtnClicked() {
    this.isUpdatingKYCMode = true;
  }

  onUpdateBtnClicked() {
    this.isUpdatingKYCMode = false;
  }

}
