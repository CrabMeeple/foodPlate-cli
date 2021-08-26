import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsDetailComponent } from './grains-detail.component';

describe('GrainsDetailComponent', () => {
  let component: GrainsDetailComponent;
  let fixture: ComponentFixture<GrainsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
