import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrannAccComponent } from './trann-acc.component';

describe('TrannAccComponent', () => {
  let component: TrannAccComponent;
  let fixture: ComponentFixture<TrannAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrannAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrannAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
