import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcelensComponent } from './xcelens.component';

describe('XcelensComponent', () => {
  let component: XcelensComponent;
  let fixture: ComponentFixture<XcelensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcelensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcelensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
