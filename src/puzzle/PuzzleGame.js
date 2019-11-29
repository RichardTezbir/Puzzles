import React, { Component } from "react";
import PuzzleTable from "./Core";
import PuzzleTableComponent from "./PuzzleTable";
import GameState from "./GameState";
import { Switch, Route, withRouter } from "react-router-dom";
import Score from "./rating-form";

class PuzzleGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzleTable: new PuzzleTable(5, 5, 1)
    };
  }

  render() {
    const { puzzleTable } = this.state;
    const { match } = this.props;
    return (
      <div>
        <GameState
          gameState={puzzleTable.gameState}
          handleNewGame={this.handleNewGame}
        />
        <Switch>
          <Route path={`${match.path}/score`}>
            <Score />
          </Route>
          <Route path={`${match.path}/`}>
            <PuzzleTableComponent
              puzzleTable={puzzleTable}
              handleClick={this.handleClick}
            />
          </Route>
        </Switch>
      </div>
    );
  }
  handleClick = (row, col) => {
    const { puzzleTable } = this.state;
    puzzleTable.clickCell(row, col);
    this.setState({ puzzleTable: puzzleTable });
  };
  handleNewGame = () => {
    const { history, match } = this.props;
    this.setState({ puzzleTable: new PuzzleTable(5, 5) });
    history.push(`${match.url}/`);
  };
}
export default withRouter(PuzzleGame);
