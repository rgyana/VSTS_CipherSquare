import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';

@Component({
  selector: 'app-name-match-result',
  templateUrl: './name-match-result.component.html',
  styleUrls: ['./name-match-result.component.css']
})
export class NameMatchResultComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  @Input()
  modalCompData: any;

  @Input()
  nameMatchResultResponse: any;

}
