import { ImageService } from 'src/app/shared/image.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { TableType1Data } from '../core/interfaces/table-type1-data.interface';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private webReqService: WebrequestService, private imageService: ImageService) { }

  updateBasicDetails(data: any) {
    console.log(data);
    console.log(`Basic Details updated`);
  }

  updateResidentialInformation(data: any) {
    console.log(data);
    console.log(`Residential Information updated`);
  }

  updateBusinessInformation(data: any) {
    console.log(data);
    console.log(`Business Information updated`);
  }

  specificRecordDataSub = new BehaviorSubject<TableType1Data>({});
  specificRecordData$ = this.specificRecordDataSub.asObservable();
  // ==========================================================


  getReportData(formData: FormData) {
    return this.webReqService.post('findReports', formData);
  }

  getKycData(kycFormId: number) {
    return this.webReqService.get(`getKycData`, [{ paramKey: 'kycFormId', paramValue: kycFormId }]);
  }

  getRemarksByType(type: string) {
    return this.webReqService.get(`getRemarksByType`, [{ paramKey: 'type', paramValue: type }]);
  }

  getAddressProofResponse(kycFormId: number, address_proof_type: string) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    formData.append('address_proof_type', address_proof_type);
    return this.webReqService.post('addressProofResponse', formData);
  }

  getSecondaryProof(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getSecondaryProof', formData);
  }

  getPanFetchResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('panFetchResponse', formData);
  }

  getPanExtractionResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('panExtractionResponse', formData);
  }

  getVideoVerificationResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getVideoVerificationResponse', formData);
  }

  getForgeryResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getForgeryResponse', formData);
  }

  getImageQualityResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getImageQualityResponse', formData);
  }

  getNameMatchResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getNameMatchResponse', formData);
  }

  getBankVerificationResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getBankVerificationResponse', formData);
  }

  getAllBankVerificationResponse(kycFormId: number) {
    let formData: any = new FormData();
    formData.append('kycFormId', kycFormId);
    return this.webReqService.post('getAllBankVerificationResponse', formData);
  }

  openInNewTab(fileName: string, tabTitle: string) {
    this.imageService.getPhoto(fileName).subscribe({
      next: (blob) => {
        const objectUrl = URL.createObjectURL(blob);
        // const newTab = window.open();
        // if (newTab) {
        //   newTab.document.body.style.backgroundColor = 'black';
        //   newTab.document.title = tabTitle;
        //   const img = newTab.document.createElement('img');
        //   img.src = objectUrl;
        //   img.style.maxWidth = '100%';
        //   img.style.maxHeight = '100%';
        //   img.style.display = 'block';
        //   img.style.marginLeft = 'auto';
        //   img.style.marginRight = 'auto';
        //   newTab.document.body.appendChild(img);
        // }

        const windowFeatures = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no';
        const windowName = '_blank';
        const windowUrl = `${objectUrl}`;
        const newTab = window.open(windowUrl, windowName, windowFeatures);
        setTimeout(() => {
          if (newTab) {
            newTab.document.title = tabTitle;
          }
        }, 100);
      },
      error: (error) => {
        console.error('Error fetching image', error);
      }
    })
  }



}
