import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-business-info-approved',
  templateUrl: './business-info-approved.component.html',
  styleUrls: ['./business-info-approved.component.css']
})
export class BusinessInfoApprovedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  modalCompData: any;

  @Output()
  editBtnBooleanEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  onEditBtnClicked() {
    this.editBtnBooleanEmitter.emit(true);
  }

}
