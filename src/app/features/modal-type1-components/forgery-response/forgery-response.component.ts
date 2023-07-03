import { Component, Input, OnInit } from '@angular/core';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';

@Component({
  selector: 'app-forgery-response',
  templateUrl: './forgery-response.component.html',
  styleUrls: ['./forgery-response.component.css']
})
export class ForgeryResponseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  modalCompData: any;

  @Input()
  forgeryResponse: any;

  openPanInNewTab() {
  }

}
