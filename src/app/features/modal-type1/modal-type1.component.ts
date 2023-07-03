import { AddressProofComponent } from './../modal-type1-components/address-proof/address-proof.component';
import { BankVerificationComponent } from './../modal-type1-components/bank-verification/bank-verification.component';
import { ReportService } from './../../shared/report.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, forkJoin, catchError, of } from 'rxjs';
import { modalType1Data } from 'src/app/core/interfaces/modal-type1-data.interface';
import { ImageService } from 'src/app/shared/image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-type1',
  templateUrl: './modal-type1.component.html',
  styleUrls: ['./modal-type1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalType1Component implements OnInit {

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private reportService: ReportService, private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  @Input()
  modalData !: any;

  sideNavBtnActive: string = 'btn2';

  // need to edit
  fetchUpdatedMobileNumber(data: any) {
    console.log(data.mobileNumber);
  }

  // Basic Details tab
  isUpdatingBasicDetails: boolean = false;
  fetchBasicDetailsBeforeUpdate(status: boolean) {
    this.isUpdatingBasicDetails = status;
  }
  fetchBasicDetailsAfterUpdate(status: boolean) {
    this.reportService.getKycData(this.modalData?.contentData?.result?.id).subscribe({
      next: (kycData) => {
        this.modalData.contentData = kycData;
        this.isUpdatingBasicDetails = status;
      }
    })
  }

  // Residential Info tab
  isUpdatingResidentialsInformation: boolean = false;
  fetchResidentialsInformationBeforeUpdate(status: boolean) {
    this.isUpdatingResidentialsInformation = status;
  }
  fetchResidentialsInformationAfterUpdate(status: boolean) {
    this.reportService.getKycData(this.modalData?.contentData?.result?.id).subscribe({
      next: (kycData) => {
        this.modalData.contentData = kycData;
        this.isUpdatingResidentialsInformation = status;
      }
    })
  }

  // Business Info tab
  isUpdatingBusinessInformation: boolean = false;
  fetchBusinessInformationBeforeUpdate(status: boolean) {
    this.isUpdatingBusinessInformation = status;
  }
  fetchBusinessInformationAfterUpdate(status: boolean) {
    this.reportService.getKycData(this.modalData?.contentData?.result?.id).subscribe({
      next: (kycData) => {
        this.modalData.contentData = kycData;
        this.isUpdatingBusinessInformation = status;
      }
    })
  }

  panFetchResponse!: {
    panNumber: string;
    panName: string;
    panFatherName: string;
    panDOB: string;
  };
  panExtractionResponse!: {
    panNumber: string;
    panName: string;
    panFatherName: string;
    panDOB: string;
  };
  panThumbnailFileNameSrc: any;

  onPanDetailsBtnClick() {
    this.sideNavBtnActive = 'btn5';
    if (this.modalData?.contentData?.result?.pan_details?.panThumbPhoto) {
      forkJoin([this.reportService.getPanFetchResponse(this.modalData.contentData?.result?.id),
      this.reportService.getPanExtractionResponse(this.modalData.contentData?.result?.id), this.imageService.getPhoto(this.modalData?.contentData?.result?.pan_details?.panThumbPhoto)])
        .subscribe({
          next: (resArray: any) => {
            // console.log(resArray);
            const [fetchRes, extractionRes, panThumbPhotoBlob] = resArray;
            this.panFetchResponse = {
              panNumber: fetchRes.result.number,
              panName: fetchRes.result.name,
              panFatherName: fetchRes.result.fatherName,
              panDOB: fetchRes.result.dob
            };
            this.panExtractionResponse = {
              panNumber: extractionRes.result.number,
              panName: extractionRes.result.name,
              panFatherName: extractionRes.result.fatherName,
              panDOB: extractionRes.result.dob
            };
            this.panThumbnailFileNameSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(panThumbPhotoBlob));
          }
        })
    } else {
      forkJoin([this.reportService.getPanFetchResponse(this.modalData.contentData?.result?.id),
      this.reportService.getPanExtractionResponse(this.modalData.contentData?.result?.id)])
        .subscribe({
          next: (resArray: any) => {
            // console.log(resArray);
            const [fetchRes, extractionRes] = resArray;
            this.panFetchResponse = {
              panNumber: fetchRes.result.number,
              panName: fetchRes.result.name,
              panFatherName: fetchRes.result.fatherName,
              panDOB: fetchRes.result.dob
            };
            this.panExtractionResponse = {
              panNumber: extractionRes.result.number,
              panName: extractionRes.result.name,
              panFatherName: extractionRes.result.fatherName,
              panDOB: extractionRes.result.dob
            };
          }
        })
    }

  }

  addressProofResponse: any;
  addressProofThumbFrontPhotoSrc: any;
  addressProofThumbBackPhotoSrc: any;
  onAddressProofBtnClick() {
    this.sideNavBtnActive = 'btn6';
    if ((this.modalData?.contentData?.result?.residential_proof?.proofThumbPhoto) && (this.modalData?.contentData?.result?.residential_proof?.proofThumbPhotoBack)) {
      forkJoin([this.reportService.getAddressProofResponse(this.modalData.contentData.result.id, this.modalData.contentData.result.residential_proof.kyc_type), this.imageService.getPhoto(this.modalData?.contentData?.result?.residential_proof?.proofThumbPhoto), this.imageService.getPhoto(this.modalData?.contentData?.result?.residential_proof?.proofThumbPhotoBack)]).subscribe({
        next: (resArray: any) => {
          const [addressProofRes, addressProofThumbFrontPhotoBlob, addressProofThumbBackPhotoBlob] = resArray;
          this.addressProofResponse = addressProofRes;
          this.addressProofThumbFrontPhotoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(addressProofThumbFrontPhotoBlob));
          this.addressProofThumbBackPhotoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(addressProofThumbBackPhotoBlob));
        }
      })
    } else {
      if (this.modalData?.contentData?.result?.id && this.modalData?.contentData?.result?.residential_proof?.kyc_type) {
        this.reportService.getAddressProofResponse(this.modalData.contentData.result.id, this.modalData.contentData.result.residential_proof.kyc_type).subscribe({
          next: (res) => {
            this.addressProofResponse = res;
          }
        })
      }
    }

  }

  secondaryProofResponse: any;
  secondaryProof1ThumbFrontPhotoSrc: any;
  secondaryProof1ThumbBackPhotoSrc: any
  onSecondaryProofBtnClick() {
    this.sideNavBtnActive = 'btn7';
    this.reportService.getSecondaryProof(this.modalData?.contentData?.result?.id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.secondaryProofResponse = res;
        if (this.secondaryProofResponse?.result[0]?.proofPhoto && this.secondaryProofResponse?.result[0]?.proofPhotoBack) {
          const secProof1FrontThumbFileName = this.imageService.getThumbFileName(this.secondaryProofResponse?.result[0]?.proofPhoto);
          const secProof1BackThumbFileName = this.imageService.getThumbFileName(this.secondaryProofResponse?.result[0]?.proofPhotoBack);
          forkJoin([this.imageService.getPhoto(secProof1FrontThumbFileName), this.imageService.getPhoto(secProof1BackThumbFileName)]).subscribe({
            next: (resArray: any) => {
              const [secProofFrontThumbPhotoBlob, secProofBackThumbPhotoBlob] = resArray;
              this.secondaryProof1ThumbFrontPhotoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(secProofFrontThumbPhotoBlob));
              this.secondaryProof1ThumbBackPhotoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(secProofBackThumbPhotoBlob));
            }
          });
        }

      }
    })
  }

  bankVerificationResponse: any;
  passbookThumbPhotoSrc: any;
  onBankVerificationBtnClick() {
    this.sideNavBtnActive = 'btn8';
    if (this.modalData?.contentData?.result?.bank_details?.passbookThumbPhoto) {
      forkJoin([this.reportService.getBankVerificationResponse(this.modalData.contentData?.result?.id), this.imageService.getPhoto(this.modalData?.contentData?.result?.bank_details?.passbookThumbPhoto)]).subscribe({
        next: (resArray: any) => {
          const [bankVerificationRes, passbookThumbPhotoBlob] = resArray;
          this.bankVerificationResponse = bankVerificationRes;
          this.passbookThumbPhotoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(passbookThumbPhotoBlob));
        }
      });
    } else {
      this.reportService.getBankVerificationResponse(this.modalData?.contentData?.result?.id).subscribe({
        next: (bankVerificationRes) => {
          this.bankVerificationResponse = bankVerificationRes;
        }
      })
    }

  }

  videoVerificationResponse: any;
  onVideoVerificationBtnClick() {
    this.sideNavBtnActive = 'btn10';

    this.reportService.getVideoVerificationResponse(this.modalData.contentData.result.id).subscribe({
      next: (res: any) => {
        this.videoVerificationResponse = res;

        // forkJoin([
        //   this.imageService.getPhoto(this.imageService.getThumbFileName(this.videoVerificationResponse?.result?.finalMatchImage1)),
        //   this.imageService.getPhoto(this.imageService.getThumbFileName(this.videoVerificationResponse?.result?.finalMatchImage2))
        // ])
        //   .pipe(
        //     catchError(error => {
        //       console.log(error);
        //       return of(null);
        //     })
        //   )
        //   .subscribe({
        //     next: (resArray: any) => {
        //       console.log(resArray);
        //       const [finalMatchImage1ThumbBlob, finalMatchImage2ThumbBlob] = resArray;
        //       this.finalMatchImage1ThumbSrc = finalMatchImage1ThumbBlob ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(finalMatchImage1ThumbBlob)) : null;
        //       this.finalMatchImage2ThumbSrc = finalMatchImage2ThumbBlob ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(finalMatchImage2ThumbBlob)) : null;
        //     }
        //   });
      }
    })
  }

  nameMatchResultResponse: any;
  onNameMatchResultBtnClick() {
    this.sideNavBtnActive = 'btn11';

    this.reportService.getNameMatchResponse(this.modalData.contentData.result.id).subscribe({
      next: (res: any) => {
        this.nameMatchResultResponse = res;
      }
    })
  }

  forgeryResponse: any;
  onForgeryResponseBtnClick() {
    this.sideNavBtnActive = 'btn12';
    this.reportService.getForgeryResponse(this.modalData.contentData.result.id).subscribe({
      next: (res: any) => {
        this.forgeryResponse = res;
      }
    })
  }

}
