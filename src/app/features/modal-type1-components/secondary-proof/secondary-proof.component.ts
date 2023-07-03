import { ReportService } from './../../../shared/report.service';
import { ImageService } from 'src/app/shared/image.service';
import { Component, Input, OnInit } from '@angular/core';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';

@Component({
  selector: 'app-secondary-proof',
  templateUrl: './secondary-proof.component.html',
  styleUrls: ['./secondary-proof.component.css']
})
export class SecondaryProofComponent implements OnInit {

  constructor(private imageService: ImageService, private reportService: ReportService) { }

  ngOnInit(): void {
  }

  @Input()
  modalCompData: any;

  @Input()
  secondaryProofResponse: any;

  @Input()
  secondaryProof1ThumbFrontPhotoSrc: any;

  @Input()
  secondaryProof1ThumbBackPhotoSrc: any;

  openPhotoInNewTab(fileName: string, tabTitle: string) {
    this.reportService.openInNewTab(fileName, tabTitle);
  }
}
