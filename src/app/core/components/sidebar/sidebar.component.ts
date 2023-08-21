import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  show = false

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateShowState();
  }
  constructor(){
    this.updateShowState();
  }
  private updateShowState() {
    this.show = window.innerWidth > 750;
  }

  toggleShow(){
    this.show = !this.show
  }

}

