import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublyxComponent } from './doublyx.component';

describe('DoublyxComponent', () => {
  let component: DoublyxComponent;
  let fixture: ComponentFixture<DoublyxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublyxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublyxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
