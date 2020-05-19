import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeptidyalComponent } from './peptidyal.component';

describe('PeptidyalComponent', () => {
  let component: PeptidyalComponent;
  let fixture: ComponentFixture<PeptidyalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeptidyalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeptidyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
