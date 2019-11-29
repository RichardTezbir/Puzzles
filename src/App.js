import React, { Component } from "react";
import "./App.css";
import Minesweeper from "./minesweeper/Minesweeper";
import Tasks from "./tasks/Tasks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Characters from "./components/Characters";
import CharacterDetail from "./components/CharacterDetail";
import CommentForm from "./minesweeper/CommentForm";
import Cars from "./cars/Cars";
import PuzzleGame from "./puzzle/PuzzleGame";

const str = "React";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/tasks"
                >
                  Tasks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/minesweeper"
                >
                  Minesweeper
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/characters"
                >
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                  to="/cars"
                >
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/puzzle"
                >
                  Puzzle N
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="container" style={{ marginTop: "68px" }}>
            <Switch>
              <Route path="/puzzle/score">
                {" "}
                <PuzzleGame />{" "}
              </Route>
              <Route path="/puzzle">
                {" "}
                <PuzzleGame />{" "}
              </Route>

              <Route path="/cars">
                {" "}
                <Cars />{" "}
              </Route>
              <Route path="/tasks">
                {" "}
                <Tasks />{" "}
              </Route>
              <Route path="/minesweeper/commentForm">
                {" "}
                <CommentForm />{" "}
              </Route>
              <Route path="/minesweeper">
                {" "}
                <Minesweeper />{" "}
              </Route>
              <Route path="/character/character-detail/:characterId">
                <CharacterDetail />
              </Route>
              <Route path="/characters">
                <Characters />
              </Route>
              <Route path="/">
                <h1>Hello {str} world!</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
