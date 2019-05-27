import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerteficatesComponent } from './certeficates.component';

describe('CerteficatesComponent', () => {
  let component: CerteficatesComponent;
  let fixture: ComponentFixture<CerteficatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerteficatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerteficatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
