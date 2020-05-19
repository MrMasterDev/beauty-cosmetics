import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinoplasticComponent } from './rinoplastic.component';

describe('RinoplasticComponent', () => {
  let component: RinoplasticComponent;
  let fixture: ComponentFixture<RinoplasticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinoplasticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinoplasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
