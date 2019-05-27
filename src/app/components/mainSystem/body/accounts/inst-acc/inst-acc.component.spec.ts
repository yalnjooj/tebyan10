import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstAccComponent } from './inst-acc.component';

describe('InstAccComponent', () => {
  let component: InstAccComponent;
  let fixture: ComponentFixture<InstAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
