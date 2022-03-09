import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { Observable, throwError as observableThrowError } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      /*throw new Error("Method not implemented.");*/
      return next.handle(req).pipe(
        catchError((err) => {
          console.log(err);
          return observableThrowError(err);
        }))
    }

}
