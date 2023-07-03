import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-business-info-update',
  templateUrl: './business-info-update.component.html',
  styleUrls: ['./business-info-update.component.css']
})
export class BusinessInfoUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updatedBusinessInformation.patchValue({
      userFullName: this.modalCompData?.result?.business_details?.firmName,
      userWorkExperience: this.modalCompData?.result?.business_details?.workExperiance,
      userFullAddress: this.modalCompData?.result?.business_details?.businessAddress,
      userLandmark: this.modalCompData?.result?.business_details?.businessLandmark,
      userPINCode: this.modalCompData?.result?.business_details?.businessPincode,
      userDistrict: this.modalCompData?.result?.business_details?.businessDistrict,
      userCity: this.modalCompData?.result?.business_details?.businessCity,
      userState: this.modalCompData?.result?.business_details?.businessState
    })
  }

  @Input()
  modalCompData: any;

  @Output()
  updateBusinessInformationEmitted: EventEmitter<any> = new EventEmitter<any>();

  updatedBusinessInformation = this.formBuilder.group({
    userFullName: [''],
    userWorkExperience: [''],
    userFullAddress: [''],
    userLandmark: [''],
    userPINCode: [''],
    userDistrict: [''],
    userCity: [''],
    userState: ['']
  });

  onBusinessInformationUpdateBtnClicked() {
    this.updateBusinessInformationEmitted.emit(false);
  }

}
