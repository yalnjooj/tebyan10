import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecherCerComponent } from './techer-cer.component';

describe('TecherCerComponent', () => {
  let component: TecherCerComponent;
  let fixture: ComponentFixture<TecherCerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecherCerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecherCerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
