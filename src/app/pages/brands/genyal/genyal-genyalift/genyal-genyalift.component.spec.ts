import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenyalGenyaliftComponent } from './genyal-genyalift.component';

describe('GenyalGenyaliftComponent', () => {
  let component: GenyalGenyaliftComponent;
  let fixture: ComponentFixture<GenyalGenyaliftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenyalGenyaliftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenyalGenyaliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
