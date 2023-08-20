import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { SubSink } from 'subsink';
import * as AuthActions from '../store/actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  subs = new SubSink()

  constructor(private _formBuilder: FormBuilder, private _authSercice: AuthService, private _router: Router, private store: Store) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value
      this.subs.add(this._authSercice.login(user).subscribe((data => {
        console.log('Login Success');
        if(data.success && data.data.user.role === 'ADMIN'){
          this.store.dispatch(AuthActions.setAuthInfo())
          this._authSercice.saveData(data)
          this._router.navigate(['/'])
        }else if(data.success){
          console.log('invalid credentials')
        }else{
          console.log(data.message);

        }
      })))
    }
  }

  onDestroy(){
    this.subs.unsubscribe()
  }
}
