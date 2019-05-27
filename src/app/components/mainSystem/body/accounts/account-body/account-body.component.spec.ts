import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBodyComponent } from './account-body.component';

describe('AccountBodyComponent', () => {
  let component: AccountBodyComponent;
  let fixture: ComponentFixture<AccountBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
