import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenyalPolyvalentComponent } from './genyal-polyvalent.component';

describe('GenyalPolyvalentComponent', () => {
  let component: GenyalPolyvalentComponent;
  let fixture: ComponentFixture<GenyalPolyvalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenyalPolyvalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenyalPolyvalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
