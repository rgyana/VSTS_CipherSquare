import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-preview',
  templateUrl: './modal-preview.component.html',
  styleUrls: ['./modal-preview.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalPreviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.modalContent.recordData.mobileNumber);
  }

  @Input()
  modalContent: any;

  kycProofOfIdentityChecker(value: string): boolean {
    if (this.modalContent.recordData.proofOfIdentity.includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  kycProofOfAddressChecker(value: string): boolean {
    if (this.modalContent.recordData.proofOfAddress.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
}
