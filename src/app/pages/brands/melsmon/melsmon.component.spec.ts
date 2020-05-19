import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelsmonComponent } from './melsmon.component';

describe('MelsmonComponent', () => {
  let component: MelsmonComponent;
  let fixture: ComponentFixture<MelsmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelsmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelsmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
