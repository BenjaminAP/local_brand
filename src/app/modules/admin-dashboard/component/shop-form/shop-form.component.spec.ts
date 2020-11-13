import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopFormComponent } from './shop-form.component';

describe('AddShopFormComponent', () => {
  let component: AddShopFormComponent;
  let fixture: ComponentFixture<AddShopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShopFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
