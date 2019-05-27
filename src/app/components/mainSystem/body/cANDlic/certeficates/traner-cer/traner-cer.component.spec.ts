import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranerCerComponent } from './traner-cer.component';

describe('TranerCerComponent', () => {
  let component: TranerCerComponent;
  let fixture: ComponentFixture<TranerCerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranerCerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranerCerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
