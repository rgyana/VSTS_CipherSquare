import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError, map } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class WebrequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private modalService: NgbModal) { }

  /**
  * "The intercept function takes a request and a next handler, and returns an observable of type
  * HttpEvent."
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // handle request
    let requestMod: HttpRequest<any> = this.addToken(request);
    // call next()
    return next.handle(requestMod).pipe(
      catchError((err: any) => {

        /* If ERROR is UNAUTHORIZED ACCESS */
        if (err.status === 401) {
          console.log(err);
          this.modalService.dismissAll('Unauthorized Access');
          this.authService.logout();
          return EMPTY;
        }

        /* Throwing an error. */
        return throwError(() => err);

      })
    )
  }

  addToken(request: HttpRequest<any>): HttpRequest<any> {

    const token = this.authService.getToken();

    if (token && request.method === 'POST') {
      const formData = request.body as FormData;
      formData.append('token', token);

      request.clone({
        setHeaders: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      });
    }

    if (token && request.method === 'GET') {
      //!=====================================================
      //! need to check if no param is given from the service
      //!=====================================================
      // Append the token to the existing parameters
      let newParams = new HttpParams();
      request.params.keys().forEach(key => {
        newParams = newParams.append(key, <string | number | boolean>request.params.get(key));
      });
      newParams = newParams.append('token', token)

      // Create a new HttpRequest object with the updated parameters
      request = request.clone({
        params: newParams
      });

    }

    return request;
  }




}
