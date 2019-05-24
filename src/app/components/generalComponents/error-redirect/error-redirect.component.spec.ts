import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRedirectComponent } from './error-redirect.component';

describe('ErrorRedirectComponent', () => {
  let component: ErrorRedirectComponent;
  let fixture: ComponentFixture<ErrorRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
