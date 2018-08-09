import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPickerComponent } from './numbers-picker.component';

describe('NumbersPickerComponent', () => {
  let component: NumbersPickerComponent;
  let fixture: ComponentFixture<NumbersPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersPickerComponent ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NumbersPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
