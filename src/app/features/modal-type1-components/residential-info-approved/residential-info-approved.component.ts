import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-residential-info-approved',
  templateUrl: './residential-info-approved.component.html',
  styleUrls: ['./residential-info-approved.component.css']
})
export class ResidentialInfoApprovedComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  @Input()
  modalCompData: any;

  @Output()
  editBtnBooleanEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  onEditBtnClick() {
    this.editBtnBooleanEmitter.emit(true);
  }

}
