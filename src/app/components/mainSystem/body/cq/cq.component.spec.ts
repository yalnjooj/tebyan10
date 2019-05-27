import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CQComponent } from './cq.component';

describe('CQComponent', () => {
  let component: CQComponent;
  let fixture: ComponentFixture<CQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
