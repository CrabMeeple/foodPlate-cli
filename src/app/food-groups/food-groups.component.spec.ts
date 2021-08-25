import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGroupsComponent } from './food-groups.component';

describe('FoodGroupsComponent', () => {
  let component: FoodGroupsComponent;
  let fixture: ComponentFixture<FoodGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
