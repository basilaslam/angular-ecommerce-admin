import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { selectUserData } from 'src/app/features/auth/store/selectors';
import { Admin } from '../../authentication/models/api.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  show = false
  user: Admin | null = null;

constructor(private _store: Store<AppStateInterface>){
  this.updateShowState();

}
  ngOnInit(): void {
    console.log('logginf');

      this._store.select(selectUserData).subscribe(data => {
        if(Object.keys(data).length >  0){
           this.user = data
          console.log(data);
        }

    })
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateShowState();
  }

  private updateShowState() {
    this.show = window.innerWidth > 750;
  }

  toggleShow(){
    this.show = !this.show
  }

}

