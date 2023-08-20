import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivateFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router,private _authService: AuthService){}
  canActivate(): boolean {
    if(this.checkLocalStorage()){
      return true
    }
    this.router.navigate(["/auth/login"])
    return false
  }


  checkLocalStorage(){
    const token =  this._authService.getAuthToken()

    if(token && token.length > 0){
      return true
    }else{
     return false
    }
  }

}
