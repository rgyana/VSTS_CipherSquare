import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private webReqService: WebrequestService,
    private router: Router
  ) {}

  //*----------------- SESSION METHODS START -----------------------------
  private setSession(token: any) {
    localStorage.setItem('token', token);
  }

  private removeSession() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }
  //*----------------- SESSION METHODS END -----------------------------

  login(email: string, password: string): Observable<any> {
    return this.webReqService.login(email, password).pipe(
      shareReplay(),
      tap((res: any) => {
        // token will be in body
        if (res.token) {
          // console.log(res);
          this.setSession(res.token);
        }
      })
    );
  }

  verifyOtp(email: string, password: string, otp: number) {
    return this.webReqService.verifyOtp(email, password, otp).pipe(
      shareReplay(),
      tap((res: any) => {
        // token will be in body
        if (res.token) {
          // console.log(res);
          this.setSession(res.token);
        }
      })
    );
  }

  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }
}
