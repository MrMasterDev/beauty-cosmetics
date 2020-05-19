import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyaminoComponent } from './hyamino.component';

describe('HyaminoComponent', () => {
  let component: HyaminoComponent;
  let fixture: ComponentFixture<HyaminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyaminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
