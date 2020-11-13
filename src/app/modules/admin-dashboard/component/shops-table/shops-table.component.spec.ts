import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsTableComponent } from './shops-table.component';

describe('ShopsTableComponent', () => {
  let component: ShopsTableComponent;
  let fixture: ComponentFixture<ShopsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
