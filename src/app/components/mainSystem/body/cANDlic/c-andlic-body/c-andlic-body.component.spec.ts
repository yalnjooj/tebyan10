import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CANDlicBodyComponent } from './c-andlic-body.component';

describe('CANDlicBodyComponent', () => {
  let component: CANDlicBodyComponent;
  let fixture: ComponentFixture<CANDlicBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CANDlicBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CANDlicBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
