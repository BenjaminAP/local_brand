import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input()
  sideNavPosition: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  sideBarMode(): string {

    if (window.innerWidth <= 1024) {
      return 'over';
    }

    return 'side';
  }
}
