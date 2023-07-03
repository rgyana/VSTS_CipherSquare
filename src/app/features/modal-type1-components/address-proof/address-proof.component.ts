import { ImageService } from 'src/app/shared/image.service';
import { Component, Input, OnInit } from '@angular/core';
import { ReportService } from 'src/app/shared/report.service';

@Component({
  selector: 'app-address-proof',
  templateUrl: './address-proof.component.html',
  styleUrls: ['./address-proof.component.css']
})
export class AddressProofComponent implements OnInit {

  constructor(private reportService: ReportService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    // console.log(this.modalCompData);
    // this.proofPhotoFileNameSrc = `${this.BASE_URL}/getPhoto?filename=${this.modalCompData?.result?.residential_proof?.proofPhoto}`;
    // this.proofPhotoThumbnailFileNameSrc = `${this.BASE_URL}/getPhoto?filename=${this.modalCompData?.result?.residential_proof?.proofThumbPhoto}`;
    // this.proofPhotoBackFileNameSrc = `${this.BASE_URL}/getPhoto?filename=${this.modalCompData?.result?.residential_proof?.proofPhotoBack}`;
    // this.proofPhotoThumbnailBackFileNameSrc = `${this.BASE_URL}/getPhoto?filename=${this.modalCompData?.result?.residential_proof?.proofThumbPhotoBack}`;
  }

  private readonly BASE_URL: any;

  @Input()
  modalCompData: any;

  @Input()
  addressProofResponse: any;

  @Input()
  proofPhotoThumbnailFileNameSrc: any;

  @Input()
  proofPhotoThumbnailBackFileNameSrc: any;

  openPhotoInNewTab(fileName: string, tabTitle: string) {
    this.reportService.openInNewTab(fileName, tabTitle);
  }


}
