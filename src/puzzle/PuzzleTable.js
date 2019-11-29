import React from "react";
import CellComponent from "./Cell";

export default function PuzzleTableComponent(props) {
  const table = props.puzzleTable;
  const rows = table.puzzleTable.map((row, r) => {
    const cells = row.map((cell, c) => (
      <CellComponent
        key={"c" + (r + 1) * (c + 1)}
        row={r}
        col={c}
        cell={cell}
        handleClick={props.handleClick}
      />
    ));
    return <tr key={"r" + r}>{cells}</tr>;
  });
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}
