import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCQComponent } from './add-cq.component';

describe('AddCQComponent', () => {
  let component: AddCQComponent;
  let fixture: ComponentFixture<AddCQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
