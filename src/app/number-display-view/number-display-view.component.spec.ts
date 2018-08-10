import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDisplayViewComponent } from './number-display-view.component';

describe('NumberDisplayViewComponent', () => {
  let component: NumberDisplayViewComponent;
  let fixture: ComponentFixture<NumberDisplayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberDisplayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDisplayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
