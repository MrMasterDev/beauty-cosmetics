import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jpx3bioComponent } from './jpx3bio.component';

describe('Jpx3bioComponent', () => {
  let component: Jpx3bioComponent;
  let fixture: ComponentFixture<Jpx3bioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jpx3bioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jpx3bioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
