import {Routes} from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
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
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
    data: {authGuardPipe: adminOnly}
  }
];

export default appRoutes;
