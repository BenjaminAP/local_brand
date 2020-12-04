import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFilter, IFilter2, IFilter3} from '../../models/i.filter';
import {AppService} from '../../service/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private appService: AppService) {}

  toggleFilter(filter: IFilter, section: string): void {
    this.appService.toggleFilter(filter, section);
  }

  filterTypes(): Observable<IFilter3> {
    return this.appService.getFilterTypeSelector();
  }
}
