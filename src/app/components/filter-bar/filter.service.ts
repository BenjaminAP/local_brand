import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFilter} from '../../models/i.filter';
import {AppService} from "../../service/app/app.service";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  allFilters$: Observable<IFilter[]>;

  constructor(private appService: AppService) {
    this.allFilters$ = this.appService.getFiltersSelector()
  }

  toggleFilter(filterId: string): void {
    this.appService.toggleFilter(filterId);
  }
}
