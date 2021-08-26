import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersMarketsComponent } from './farmers-markets.component';

describe('FarmersMarketsComponent', () => {
  let component: FarmersMarketsComponent;
  let fixture: ComponentFixture<FarmersMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
