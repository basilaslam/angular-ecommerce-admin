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
  constructor(private router: Router){}
  canActivate(): boolean {
    if(this.checkLocalStorage()){
      return true
    }
    this.router.navigate(["/auth/login"])
    return false
  }


  checkLocalStorage(){
    const token =  localStorage.getItem('authToken') as string
    if(token.length > 0){
      return true
    }else{
     return false
    }
  }

}
