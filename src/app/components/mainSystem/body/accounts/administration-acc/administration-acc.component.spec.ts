import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAccComponent } from './administration-acc.component';

describe('AdministrationAccComponent', () => {
  let component: AdministrationAccComponent;
  let fixture: ComponentFixture<AdministrationAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
