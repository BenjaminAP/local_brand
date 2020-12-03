import { Component, OnInit } from '@angular/core';
import {FilterService} from './filter.service';
import {Observable} from 'rxjs';
import {IFilter, IFilter2} from '../../models/i.filter';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  panelOpenState = false;
  filterChips$: Observable<IFilter[]>;
  filterTypeChips$: Observable<IFilter2>;

  chipColor = new Map([
    [true, 'primary'],
    [false, 'accent']
  ]);

  constructor(private filterService: FilterService) {
    this.filterChips$ = this.filterService.allFilters();
    this.filterTypeChips$ = this.filterService.filterTypes();
  }

  ngOnInit(): void {
    this.filterTypeChips$.subscribe(data => console.log(data));
  }

  public toggleFilter(chip: IFilter): void {
    this.filterService.toggleFilter(chip.type);
  }

  public toggleFilter2(chip: string, filterType): void {

  }

}
