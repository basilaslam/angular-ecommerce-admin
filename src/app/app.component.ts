import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './core/authentication/auth.service';
import { User } from './core/authentication/models/api.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'web-app';
  user! : User | null
  subs = new SubSink()
  constructor(private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.subs.add( this._authService.userSubject.subscribe(data => {
      this.user = data
    }))

    initFlowbite();
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }
}
