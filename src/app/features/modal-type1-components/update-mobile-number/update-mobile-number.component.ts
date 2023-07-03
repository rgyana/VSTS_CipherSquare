import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-mobile-number',
  templateUrl: './update-mobile-number.component.html',
  styleUrls: ['./update-mobile-number.component.css']
})
export class UpdateMobileNumberComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log(this.modalCompData);

    if (this.modalCompData?.result?.mobileNumber) {
      this.updateMobileNumberForm.patchValue({
        mobileNumber: this.modalCompData?.result?.mobileNumber
      })
    }
  }

  @Input()
  modalCompData: any;

  @Output()
  updateMobileNumberEmitted: EventEmitter<any> = new EventEmitter<any>();

  updateMobileNumberForm = this.formBuilder.group({
    mobileNumber: ['']
  });

  onUpdateMobileNumberBtnClick() {
    this.updateMobileNumberEmitted.emit(this.updateMobileNumberForm.value);
  }

}
