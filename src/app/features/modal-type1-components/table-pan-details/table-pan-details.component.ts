import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pan-details',
  templateUrl: './table-pan-details.component.html',
  styleUrls: ['./table-pan-details.component.css']
})
export class TablePanDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  panDetails!: {
    panNumber: string;
    panName: string;
    panFatherName: string;
    panDOB: string;
  };
}
