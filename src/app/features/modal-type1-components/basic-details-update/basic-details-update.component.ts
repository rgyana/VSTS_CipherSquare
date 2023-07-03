import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReportService } from 'src/app/shared/report.service';

@Component({
  selector: 'app-basic-details-update',
  templateUrl: './basic-details-update.component.html',
  styleUrls: ['./basic-details-update.component.css'],
})
export class BasicDetailsUpdateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updatedBasicDetails.patchValue({
      userName: this.modalCompData?.result?.basic_details?.name,
      userEmail: this.modalCompData?.result?.basic_details?.email,
      userMobileNumber: this.modalCompData?.result?.mobileNumber,
      userFather: this.modalCompData?.result?.basic_details?.fatherName,
      userGender: this.modalCompData?.result?.basic_details?.gender,
      userDOB: this.modalCompData?.result?.basic_details?.dob,
      userQualification: this.modalCompData?.result?.basic_details?.qualification,
      userCategory: this.modalCompData?.result?.basic_details?.category,
      userHandicapped: this.modalCompData?.result?.basic_details?.physicallyHandicapped,
      userOccupation: this.modalCompData?.result?.basic_details?.alternateOccupationType,
      userProvider: this.modalCompData?.result?.basic_details?.provider,
      userEntity: this.modalCompData?.result?.basic_details?.entityType,
      userAltNumber: this.modalCompData?.result?.basic_details?.alternateNumber,
    })
  }

  @Input()
  modalCompData: any;

  @Output()
  updateBasicDetailsEmitted: EventEmitter<boolean> = new EventEmitter<boolean>();


  updatedBasicDetails = this.formBuilder.group({
    userName: [''],
    userEmail: [''],
    userMobileNumber: [''],
    userFather: [''],
    userGender: [''],
    userDOB: [''],
    userQualification: [''],
    userCategory: [''],
    userHandicapped: [''],
    userOccupation: [''],
    userProvider: [''],
    userEntity: [''],
    userAltNumber: [''],
  });

  onBasicDetailsUpdateBtnClicked() {
    // this.reportService.updateBasicDetails(this.updatedBasicDetails.value);
    // this.updateBasicDetailsEmitted.emit(this.updatedBasicDetails.value);
    this.updateBasicDetailsEmitted.emit(false);
  }
}
