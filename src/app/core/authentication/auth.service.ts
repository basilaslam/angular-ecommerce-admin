/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, OnDestroy } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { LoginModel } from './models/auth.model';
import { LoginApiResponse, LoggedInUser, Admin, BasicApiResponse } from './models/api.model';
import { SubSink } from 'subsink';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  subs = new SubSink()

   tokenSubject = new BehaviorSubject<string | null>(null)
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,

    ){
      this.initAuthStatus()
    }



  initAuthStatus(){
    this.tokenSubject.next(this.getAuthToken())
  }

  login(user:LoginModel): Observable<LoginApiResponse>{
    return this._httpClient.post<LoginApiResponse>(`${environment.URI}/users/login`, user)
  }


  saveData({data}: LoginApiResponse){
    localStorage.setItem('authToken', data.accessToken)
    this.tokenSubject.next(data.accessToken)
    localStorage.setItem('refreashToken', data.refreshToken)
  }



  getUser():  Observable<LoggedInUser>{
      return this._httpClient.get<LoggedInUser>(`${environment.URI}/users/current-user`)
  }


  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  signOutUser(){
    this.subs.add(this._httpClient.post(`${environment.URI}/users/logout`,null,  { responseType: 'text' }).subscribe(()=>{
      localStorage.setItem('authToken', '')
      localStorage.setItem('refreashToken', '')
      this.tokenSubject.next(null)
      this._router.navigate(['/auth/login'])
    }))
  }


  // Check if the user is authenticated
  isAuthenticatedUser(): Observable<boolean> {
    return this.tokenSubject.pipe(
      map((authToken) => !!authToken)
    );
  }

  getAuthInfo(){
    const auth = localStorage.getItem('authToken')
   if(auth){
      return true
    }else{
      return false
    }
  }

  getAuthValid(): Observable<BasicApiResponse>{
      return this._httpClient.get<BasicApiResponse>(`${environment.URI}/ecommerce/profile`)
  }


  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }

}
