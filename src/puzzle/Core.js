import React, { Component } from "react";
import CellComponent from "./Cell";
import { TileStateEnum } from "../minesweeper/Core";
import { GameState } from "./GameState";

const moveCells = require("array-move");

export class Cell {
  constructor(value, state = CellStateEnum.OPEN) {
    this.state = state;
    this.value = value;
  }
}

export const CellStateEnum = { OPEN: 1, CLOSED: 2 };
export const GameStateEnum = { PLAYING: 0, WON: 1 };

export default class PuzzleTable extends Component {
  constructor(rowCount, colCount, wholeCount) {
    super();
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.wholeCount = wholeCount;
    this.gameState = GameStateEnum.PLAYING;
    this.puzzleTable = [];
    this.generate();
  }

  generate() {
    this.puzzleTable = [];

    for (let row = 0; row < this.rowCount; row++) {
      this.puzzleTable.push([]);
      this.puzzleTable[row].length = this.colCount;
    }
    let randomRow, randomCol;
    let count = 1;

    this.wholeCount = this.rowCount * this.colCount;

    do {
      randomRow = Math.floor(Math.random() * this.rowCount);
      randomCol = Math.floor(Math.random() * this.colCount);

      if (!this.puzzleTable[randomRow][randomCol]) {
        this.puzzleTable[randomRow][randomCol] = new Cell(count);
        count++;
      }
    } while (count < this.wholeCount);

    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.colCount; col++) {
        if (!this.puzzleTable[row][col]) {
          this.puzzleTable[row][col] = new Cell(0);
          this.puzzleTable[row][col].state = CellStateEnum.CLOSED;
          console.log(this.puzzleTable[row][col].value);
        }
      }
    }
  }

  clickCell = (row, col) => {
    console.log(row);
    console.log(col);
    if (this.gameState !== GameStateEnum.PLAYING) return;
    // if (this.puzzleTable[row][col] === CellStateEnum.CLOSED) {
    //   return;
    // }
    // if (this.puzzleTable[row][col] === CellStateEnum.OPEN) {
    return this.moveCell(row, col);
    // }
  };

  moveCell(row, col) {
    let count = 0,
      actRow = 0,
      actCol = 0;

    for (let r = -1; r <= 1; r++) {
      actRow = row + r;
      console.log(actRow);
      if (actRow >= 0 && actRow < this.rowCount) {
        if (
          this.puzzleTable[actRow][col] &&
          this.puzzleTable[actRow][col].value === 0
        ) {
          this.puzzleTable[actRow][col].value = this.puzzleTable[row][
            col
          ].value;
          this.puzzleTable[row][col].value = 0;
        }
      }
    }
    for (let c = -1; c <= 1; c++) {
      actCol = col + c;
      console.log(actRow);
      if (actCol >= 0 && actCol < this.colCount) {
        if (
          this.puzzleTable[row][actCol] &&
          this.puzzleTable[row][actCol].value === 0
        ) {
          this.puzzleTable[row][actCol].value = this.puzzleTable[row][
            col
          ].value;
          this.puzzleTable[row][col].value = 0;
        }
      }
    }
    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.colCount; col++) {
        if (this.puzzleTable[row][col].value === 0) {
          this.puzzleTable[row][col].state = CellStateEnum.CLOSED;
        } else {
          this.puzzleTable[row][col].state = CellStateEnum.OPEN;
        }
      }
    }
  }
}
