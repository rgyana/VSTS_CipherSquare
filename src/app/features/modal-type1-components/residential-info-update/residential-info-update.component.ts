import { FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-residential-info-update',
  templateUrl: './residential-info-update.component.html',
  styleUrls: ['./residential-info-update.component.css']
})
export class ResidentialInfoUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updatedResidentialInformation.patchValue({
      userFullAddress: this.modalCompData?.result?.residential_details?.address,
      userLandmark: this.modalCompData?.result?.residential_details?.landmark,
      userPINCode: this.modalCompData?.result?.residential_details?.pincode,
      userDistrict: this.modalCompData?.result?.residential_details?.district,
      userCity: this.modalCompData?.result?.residential_details?.city,
      userState: this.modalCompData?.result?.residential_details?.state
    })
  }

  @Input()
  modalCompData: any;

  @Output()
  updateResidentialInformationEmitted: EventEmitter<any> = new EventEmitter<any>();

  updatedResidentialInformation = this.formBuilder.group({
    userFullAddress: [''],
    userLandmark: [''],
    userPINCode: [''],
    userDistrict: [''],
    userCity: [''],
    userState: ['']
  });

  onResidentialInformationUpdateBtnClicked() {
    this.updateResidentialInformationEmitted.emit(false);
  }

}
