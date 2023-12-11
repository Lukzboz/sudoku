import { Component } from '@angular/core';
import { Field } from 'src/field';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.sass']
})
export class SudokuBoardComponent {
  fields: Field[] = [];

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.fields.push({x: i, y: j, value: ""})
      }
    }
  }
}
