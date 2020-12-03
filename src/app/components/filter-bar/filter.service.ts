import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFilter, IFilter2} from '../../models/i.filter';
import {AppService} from '../../service/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private appService: AppService) {}

  toggleFilter(filterId: string): void {
    this.appService.toggleFilter(filterId);
  }

  allFilters(): Observable<IFilter[]> {
    return this.appService.getFiltersSelector();
  }

  filterTypes(): Observable<IFilter2> {
    return this.appService.getFilterTypeSelector();
  }
}
