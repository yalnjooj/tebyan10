import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViowCQComponent } from './viow-cq.component';

describe('ViowCQComponent', () => {
  let component: ViowCQComponent;
  let fixture: ComponentFixture<ViowCQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViowCQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViowCQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
