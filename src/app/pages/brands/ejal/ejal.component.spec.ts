import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjalComponent } from './ejal.component';

describe('EjalComponent', () => {
  let component: EjalComponent;
  let fixture: ComponentFixture<EjalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
