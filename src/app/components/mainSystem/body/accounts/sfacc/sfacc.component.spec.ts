import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFAccComponent } from './sfacc.component';

describe('SFAccComponent', () => {
  let component: SFAccComponent;
  let fixture: ComponentFixture<SFAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
