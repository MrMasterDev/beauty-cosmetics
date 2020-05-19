import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xcelens3DetailsComponent } from './xcelens3-details.component';

describe('Xcelens3DetailsComponent', () => {
  let component: Xcelens3DetailsComponent;
  let fixture: ComponentFixture<Xcelens3DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xcelens3DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xcelens3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
