import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private webReqService: WebrequestService, private http: HttpClient) {
    this.BASE_URL = environment.BASE_URL;
  }

  private readonly BASE_URL: any;

  getPhoto(fileName: string, type: string | null = null): Observable<Blob> {
    let params = new HttpParams()
      .append('filename', fileName);
    if (type) {
      params.append('type', type);
    }
    return this.http.get(`${this.BASE_URL}/getPhoto`, { params: params, responseType: 'blob' });
  }

  getThumbFileName(originalFilename: string): string {
    if (originalFilename) {
      // const originalString = "2023-02-09/addressproofdoc/12973007261675941795.jpeg";
      const originalString = originalFilename;
      const splitString = originalString.split('/'); // split the string using "/" as separator
      const thumbFilename = `${splitString[0]}/${splitString[1]}/thumb/thumb_${splitString[2]}`; // combine the modified string
      return thumbFilename;
    } else {
      return '';
    }
  }
}
