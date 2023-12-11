import { Component, Input } from '@angular/core';
import { Field } from 'src/field';

@Component({
  selector: 'app-sudoku-field',
  templateUrl: './sudoku-field.component.html',
  styleUrls: ['./sudoku-field.component.sass']
})
export class SudokuFieldComponent {

  value: String = "";

}
