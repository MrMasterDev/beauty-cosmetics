import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenyalComponent } from './genyal.component';

describe('GenyalComponent', () => {
  let component: GenyalComponent;
  let fixture: ComponentFixture<GenyalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenyalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
