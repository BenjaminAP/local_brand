import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  @Output()
  toggleSideNavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.toggleSideNavEvent.emit();
  }

}
