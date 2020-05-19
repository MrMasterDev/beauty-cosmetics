import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xcelens4DetailsComponent } from './xcelens4-details.component';

describe('Xcelens4DetailsComponent', () => {
  let component: Xcelens4DetailsComponent;
  let fixture: ComponentFixture<Xcelens4DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xcelens4DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xcelens4DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
