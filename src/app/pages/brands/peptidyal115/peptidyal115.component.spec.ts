import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Peptidyal115Component } from './peptidyal115.component';

describe('Peptidyal115Component', () => {
  let component: Peptidyal115Component;
  let fixture: ComponentFixture<Peptidyal115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Peptidyal115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Peptidyal115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
