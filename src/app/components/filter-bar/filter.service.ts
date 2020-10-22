import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFilter} from '../../models/i.filter';
import {Store} from '@ngrx/store';
import {ShopState} from '../../reducers/stores.reducer';
import {allFilters} from '../../selectors/shop.selector';
import {LOAD_SHOPS_STARTED, TOGGLE_FILTER, ToggleFilter} from '../../actions/shop.action';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  allFilters$: Observable<IFilter[]>;

  constructor(private store: Store<ShopState>) {
    this.allFilters$ = this.store.select(allFilters);
  }

  toggleFilter(filterType: string): void {
    this.store.dispatch(new ToggleFilter(filterType));
  }
}
