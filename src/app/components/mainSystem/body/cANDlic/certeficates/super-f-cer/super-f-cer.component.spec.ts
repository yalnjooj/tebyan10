import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperFCerComponent } from './super-f-cer.component';

describe('SuperFCerComponent', () => {
  let component: SuperFCerComponent;
  let fixture: ComponentFixture<SuperFCerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperFCerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperFCerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
