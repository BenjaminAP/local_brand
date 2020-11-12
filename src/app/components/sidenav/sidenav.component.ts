import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {AdminService} from '../../service/admin/admin.service';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {adminSelector} from '../../store/auth';
import {UserService} from '../../service/user/user.service';
import {AuthService} from '../../service/auth/auth.service';

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

  isAdmin: Observable<boolean> = of(false);

  constructor(private adminService: AdminService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getConnectionSelector().subscribe(temp => console.log(temp));
    this.isAdmin = this.authService.getConnectionSelector() ? this.adminService.isAdmin() : of(false);
    this.isAdmin.subscribe(temp => console.log(temp));
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
