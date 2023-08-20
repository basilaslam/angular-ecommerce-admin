import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { SubSink } from 'subsink';

@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnDestroy{
  authToken: string | null = null;
  subs = new SubSink()
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticatedUser()) {
      this.subs.add(this.authService.tokenSubject.subscribe((authToken) => {
        this.authToken = authToken;
      }))


      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authToken}`,
        },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }


  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }
}
