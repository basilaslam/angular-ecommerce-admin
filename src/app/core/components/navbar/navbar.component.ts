import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { User } from '../../authentication/models/api.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  user!: User | null
  subs = new SubSink()
  constructor(private _authService: AuthService){ }

  ngOnInit(): void {
    this.subs.add(this._authService.userSubject.subscribe(data => {
      this.user = data
    }))

  }


  logOut(){
    this._authService.signOutUser()
  }

  ngOnDestroy(): void {
this.subs.unsubscribe()
  }

}
