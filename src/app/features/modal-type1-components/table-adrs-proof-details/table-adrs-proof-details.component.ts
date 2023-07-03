import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-adrs-proof-details',
  templateUrl: './table-adrs-proof-details.component.html',
  styleUrls: ['./table-adrs-proof-details.component.css']
})
export class TableAdrsProofDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  addressProofTableData: any;

}
