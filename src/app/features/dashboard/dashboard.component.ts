import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAuthState } from '../auth/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isUser$: Observable<boolean>



  constructor(private store: Store<AppStateInterface>){
    this.isUser$ =  this.store.pipe(select(selectAuthState))
  }

  ngOnInit(){
    console.log(this.isUser$);
  }
}
