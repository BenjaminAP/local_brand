import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFilter} from '../../models/i.filter';
import {Store} from '@ngrx/store';
import {IShopState} from '../../store/shops/shop.reducer';
import {allFilters} from '../../store/shops/shop.selector';
import {LOAD_SHOPS_STARTED, TOGGLE_FILTER, ToggleFilter} from '../../store/shops/shop.action';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  allFilters$: Observable<IFilter[]>;

  constructor(private store: Store<IShopState>) {
    this.allFilters$ = this.store.select(allFilters);
  }

  toggleFilter(filterType: string): void {
    this.store.dispatch(new ToggleFilter(filterType));
  }
}
