import {Routes} from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AngularFireAuthGuard, hasCustomClaim} from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');

const appRoutes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: 'shops',
    component: ShopComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: adminOnly}
  }
];

export default appRoutes;
