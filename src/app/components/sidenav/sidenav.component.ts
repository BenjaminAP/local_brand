import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AdminService} from '../../service/admin/admin.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input()
  sideNavPosition: boolean;

  isAdmin: Observable<boolean> = of(false);

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isAdmin = this.adminService.isAdmin();
  }

  @HostListener('window:resize', ['$event'])
  sideBarMode(): string {

    if (window.innerWidth <= 1440) {
      return 'over';
    }

    return 'side';
  }
}
