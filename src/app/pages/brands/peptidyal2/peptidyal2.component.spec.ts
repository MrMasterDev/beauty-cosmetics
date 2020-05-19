import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Peptidyal2Component } from './peptidyal2.component';

describe('Peptidyal2Component', () => {
  let component: Peptidyal2Component;
  let fixture: ComponentFixture<Peptidyal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Peptidyal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Peptidyal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
