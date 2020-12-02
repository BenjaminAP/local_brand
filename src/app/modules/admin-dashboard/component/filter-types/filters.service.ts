import { Injectable } from '@angular/core';
import {AppService} from "../../../../service/app/app.service";
import {Observable} from "rxjs";
import {IFilter2} from "../../../../models/i.filter";

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  filterTypes: Observable<IFilter2>

  constructor(private appService: AppService) { }
}
