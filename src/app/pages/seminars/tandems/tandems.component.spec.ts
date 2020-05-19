import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TandemsComponent } from './tandems.component';

describe('TandemsComponent', () => {
  let component: TandemsComponent;
  let fixture: ComponentFixture<TandemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
