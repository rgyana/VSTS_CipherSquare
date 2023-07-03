import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.css']
})
export class SortPanelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  @Output()
  filterFormValueEmitted: EventEmitter<any> = new EventEmitter<any>();

  isAdvanceFilterBtnClicked: boolean = false;

  filterPanelForm = this.formBuilder.group({
    fromdate: [''],
    todate: [''],
    kycStatus: [''],
    kycMode: [''],
    page: [''],
    frommodifieddate: [''],
    modifiedtodate: [''],
    rcodetodate: [''],
    rcodefromdate: [''],
    uservalue: [''],
    sortby: ['created_at'],
    sortdata: ['desc']
  });

  advanceFilterBtnClick() {
    this.isAdvanceFilterBtnClicked = !this.isAdvanceFilterBtnClicked;
  }

  filterData() {
    this.filterFormValueEmitted.emit(this.filterPanelForm.value);
  }

  restFiterForm() {
    this.filterPanelForm.patchValue({
      fromdate: '',
      todate: '',
      kycStatus: '',
      kycMode: '',
      page: '',
      frommodifieddate: '',
      modifiedtodate: '',
      rcodetodate: '',
      rcodefromdate: '',
      uservalue: '',
      sortby: 'created_at',
      sortdata: 'desc'
    });
  }
}
