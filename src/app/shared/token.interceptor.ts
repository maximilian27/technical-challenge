import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SearchShowsService} from '../layout/search-shows/search-shows.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private searchShowsService: SearchShowsService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.searchShowsService.token;

        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }
        return next.handle(request);
  }
}
