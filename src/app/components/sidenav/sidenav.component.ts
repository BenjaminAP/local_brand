import {Component, HostListener, Input, OnInit} from '@angular/core';
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

  isAdmin: Observable<{ [p: string]: any }> = null;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isAdmin = this.store.select(adminSelector);
  }

  @HostListener('window:resize', ['$event'])
  sideBarMode(): string {

    if (window.innerWidth <= 1440) {
      return 'over';
    }

    return 'side';
  }
}
