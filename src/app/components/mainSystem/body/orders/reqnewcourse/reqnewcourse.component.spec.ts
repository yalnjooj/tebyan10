import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqnewcourseComponent } from './reqnewcourse.component';

describe('ReqnewcourseComponent', () => {
  let component: ReqnewcourseComponent;
  let fixture: ComponentFixture<ReqnewcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqnewcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqnewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
