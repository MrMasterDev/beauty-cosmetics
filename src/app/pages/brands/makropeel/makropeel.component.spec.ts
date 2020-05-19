import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakropeelComponent } from './makropeel.component';

describe('MakropeelComponent', () => {
  let component: MakropeelComponent;
  let fixture: ComponentFixture<MakropeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakropeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakropeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
