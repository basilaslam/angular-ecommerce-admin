import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './core/authentication/auth.service';
import { Admin } from './core/authentication/models/api.model';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import * as authActions from './features/auth/store/actions'
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'web-app';
  user! : Admin | null
  subs = new SubSink()
  constructor(private _store: Store, private _authService: AuthService, private _router: Router) {
  }

  ngOnInit(): void {
      this._authService.getUser().subscribe(data => {
        if(data.success){
          this._store.dispatch(authActions.setUserData(data.data))
        }else{
          this._router.navigate(["/auth/login"])
        }
      })


    initFlowbite();
  }




  ngOnDestroy(){
    this.subs.unsubscribe()
  }
}
