import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/shared/image.service';
import { environment } from 'src/environments/environment';
import { ReportService } from './../../../shared/report.service';
import { Component, Input, OnInit } from '@angular/core';
import { blob } from 'stream/consumers';
import { features } from 'process';

@Component({
  selector: 'app-pan-details',
  templateUrl: './pan-details.component.html',
  styleUrls: ['./pan-details.component.css']
})
export class PanDetailsComponent implements OnInit {

  constructor(private reportService: ReportService, private imageService: ImageService, private sanitizer: DomSanitizer) {
    this.BASE_URL = environment.BASE_URL;
  }

  ngOnInit(): void {
    // this.panThumbnailFileNameSrc = `${this.BASE_URL}/getPhoto?filename=${this.modalCompData?.result?.pan_details?.panThumbPhoto}`;
    // this.panImageFileNameSrc = `${this.BASE_URL}/getPhoto?filename=${this.modalCompData?.result?.pan_details?.panPhoto}`;
  }

  private readonly BASE_URL: any;

  @Input()
  modalCompData: any;

  @Input()
  panThumbnailFileNameSrc: any;

  @Input()
  panFetchResponse!: {
    panNumber: string;
    panName: string;
    panFatherName: string;
    panDOB: string;
  };

  @Input()
  panExtractionResponse!: {
    panNumber: string;
    panName: string;
    panFatherName: string;
    panDOB: string;
  };

  panImageFileNameSrc: any;

  openPanInNewTab(fileName: string, tabTitle: string) {
    this.reportService.openInNewTab(fileName, tabTitle);
  }

}
