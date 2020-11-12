import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {AdminService} from '../../service/admin/admin.service';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {adminSelector} from '../../store/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input()
  sideNavPosition: boolean;

  @Output()
  sideNavClosingEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  isAdmin: Observable<boolean>;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isAdmin = this.adminService.isAdmin();
  }

  sideNavClosing(): void {
    this.sideNavClosingEvent.emit(true);
  }

  @HostListener('window:resize', ['$event'])
  sideBarMode(): string {

    if (window.innerWidth <= 1440) {
      return 'over';
    }

    return 'side';
  }
}
