import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-details-approved',
  templateUrl: './basic-details-approved.component.html',
  styleUrls: ['./basic-details-approved.component.css']
})
export class BasicDetailsApprovedComponent implements OnInit {

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
