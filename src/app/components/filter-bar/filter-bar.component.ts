import { Component, OnInit } from '@angular/core';
import {FilterService} from './filter.service';
import {Observable} from 'rxjs';
import {IFilter} from '../../models/i.filter';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  panelOpenState = false;
  filterChips$: Observable<IFilter[]>;

  chipColor = new Map([
    [true, 'primary'],
    [false, 'accent']
  ]);

  constructor(private filterService: FilterService) {
    this.filterChips$ = this.filterService.allFilters();
  }

  ngOnInit(): void {
  }

  toggleFilter(chip: IFilter): void {
    this.filterService.toggleFilter(chip.type);
  }

}
