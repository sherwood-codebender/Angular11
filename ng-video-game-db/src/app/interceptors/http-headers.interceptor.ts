import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { Observable, throwError as observableThrowError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*throw new Error("Method not implemented.");*/
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '92ac9715e9msh796522810b09e20p16cba5jsn64fac3d871cb',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '8824c3a8db564051b7eff162cc4a923d',
      }
    }); 
    return next.handle(req);
    
  }

}
