import { ReportService } from 'src/app/shared/report.service';
import { Component, Input, OnInit } from '@angular/core';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';

@Component({
  selector: 'app-video-verification',
  templateUrl: './video-verification.component.html',
  styleUrls: ['./video-verification.component.css']
})
export class VideoVerificationComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  @Input()
  modalCompData: any;

  @Input()
  videoVerificationResponse: any;

  openPanInNewTab(fileName: string, tabTitle: string) {
    this.reportService.openInNewTab(fileName, tabTitle);
  }


}
