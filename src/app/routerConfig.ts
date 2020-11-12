import {Routes} from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {canActivate, hasCustomClaim} from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');


const appRoutes: Routes = [
  {
    path: 'shops',
    component: ShopComponent
  },
  {
    path: '',
    component: ShopComponent
  },
  {
    path: 'admin-dashboard',
    ...canActivate(adminOnly),
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },

];

export default appRoutes;
