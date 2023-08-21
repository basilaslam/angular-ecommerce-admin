import { Component, OnDestroy, OnInit  } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { SubSink } from 'subsink';
import { Store, select } from '@ngrx/store';
import { Admin } from '../../authentication/models/api.model';
import * as authAcions from '../../../features/auth/store/actions'
import { AppStateInterface } from 'src/app/types/appState.interface';
import { selectUserData } from 'src/app/features/auth/store/selectors';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  user!: Admin
  subs = new SubSink()
  constructor(private _authService: AuthService, private _store: Store<AppStateInterface>
    ){ }

  ngOnInit(): void {
    console.log('logginf');

      this._store.select(selectUserData).subscribe(data => {
        this.user = data
        console.log(data);

    })
  }


  logOut(){
    this._authService.signOutUser()
  }

  ngOnDestroy(): void {
this.subs.unsubscribe()
  }

}
