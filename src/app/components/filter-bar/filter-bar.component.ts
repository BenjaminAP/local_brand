import { Component, OnInit } from '@angular/core';
import {FilterService} from './filter.service';
import {Observable} from 'rxjs';
import {IFilter, IFilter2, IFilter3} from '../../models/i.filter';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  panelOpenState = false;
  filterChips$: Observable<IFilter[]>;
  filterTypeChips$: Observable<IFilter3>;

  chipColor = new Map([
    [true, 'primary'],
    [false, 'accent']
  ]);

  constructor(private filterService: FilterService) {
    this.filterTypeChips$ = this.filterService.filterTypes();
  }

  ngOnInit(): void {}

  public toggleFilter(chip: IFilter, section: string): void {
    this.filterService.toggleFilter(chip, section);
  }

  public toggleFilter2(chip: string, filterType): void {

  }

}
