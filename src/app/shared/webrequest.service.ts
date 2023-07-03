import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebrequestService {
  constructor(private http: HttpClient) {
    this.BASE_URL = environment.BASE_URL;
  }

  private readonly BASE_URL: any;
  isLoadingSub: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSub as Observable<boolean>;

  get(uri: string, paramObjs: { paramKey: string, paramValue: any }[] | null = null) {
    if (paramObjs) {
      let params = new HttpParams();
      paramObjs.forEach(obj => {
        params = params.append(obj.paramKey, obj.paramValue)
      });
      return this.http.get(`${this.BASE_URL}/${uri}`, { params: params });
    };
    return this.http.get(`${this.BASE_URL}/${uri}`);
  }

  post(uri: string, payload: any) {
    return this.http.post(`${this.BASE_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: any) {
    return this.http.patch(`${this.BASE_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.BASE_URL}/${uri}`);
  }

  login(email: string, password: string, loginMode: string = 'web') {
    return this.http.post(
      `${this.BASE_URL}/login`,
      { email: email, password: password, loginMode: loginMode }
      /* Telling the httpClient to return the full response instead of just the body. */
      // ,{ observe: 'response' }
    );
  }

  verifyOtp(
    email: string,
    password: string,
    otp: number,
    loginMode: string = 'web'
  ) {
    return this.http.post(
      `${this.BASE_URL}/verifyotp`,
      { email: email, password: password, loginMode: loginMode, otp: otp }
      /* Telling the httpClient to return the full response instead of just the body. */
      // ,{ observe: 'response' }
    );
  }

  signup(email: string, password: string) {
    return this.http.post(
      `${this.BASE_URL}/user`,
      {
        email,
        password,
      } /* Telling the httpClient to return the full response instead of just the body. */
      // ,{ observe: 'response' }
    );
  }

}
