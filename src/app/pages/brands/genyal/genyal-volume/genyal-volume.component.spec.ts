import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenyalVolumeComponent } from './genyal-volume.component';

describe('GenyalVolumeComponent', () => {
  let component: GenyalVolumeComponent;
  let fixture: ComponentFixture<GenyalVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenyalVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenyalVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
