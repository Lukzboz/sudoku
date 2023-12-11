import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuFieldComponent } from './sudoku-field.component';

describe('SudokuFieldComponent', () => {
  let component: SudokuFieldComponent;
  let fixture: ComponentFixture<SudokuFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudokuFieldComponent]
    });
    fixture = TestBed.createComponent(SudokuFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
