import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details-panel',
  templateUrl: './view-details-panel.component.html',
  styleUrls: ['./view-details-panel.component.css']
})
export class ViewDetailsPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recordData: any;

}
