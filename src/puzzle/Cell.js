import React, { Component } from "react";
import { Cell, CellStateEnum } from "./Core";
import "./cell.css";

export default function CellComponent(props) {
  const { cell, row, col, handleClick } = props;

  return (
    <td className="tileStyle ">
      <button
        className={
          "tileStyle " + (cell.state === CellStateEnum.OPEN ? "open" : "closed")
        }
        onClick={() => handleClick(row, col)}
      >
        <span>{cell.value}</span>
      </button>
    </td>
  );
}
