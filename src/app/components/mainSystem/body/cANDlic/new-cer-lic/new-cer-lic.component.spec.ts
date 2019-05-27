import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCerLicComponent } from './new-cer-lic.component';

describe('NewCerLicComponent', () => {
  let component: NewCerLicComponent;
  let fixture: ComponentFixture<NewCerLicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCerLicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCerLicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
