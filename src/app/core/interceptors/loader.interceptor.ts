import { WebrequestService } from 'src/app/shared/webrequest.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private webReqService: WebrequestService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.webReqService.isLoadingSub.next(true);

    return next.handle(request)
      .pipe(
        finalize(
          () => {
            this.webReqService.isLoadingSub.next(false);
          }
        )
      )

  }
}
