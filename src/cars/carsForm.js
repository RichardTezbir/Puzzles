import React, { Component } from "react";

export default class CarsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      editedTask: true
    };
  }
  render() {
    return (
      <div className="mb-5">
        <form>
          <div className="form-group">
            <label>Car name:</label>
            <input
              className="form-control"
              type="text"
              name="carName"
              value={this.state.carName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Spezetka:</label>
            <input
              className="form-control"
              type="text"
              name="spezetka"
              value={this.state.spezetka}
              onChange={this.handleChange}
            />
          </div>
          <button
            className="btn btn-primary mr-2"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => cancelHandler()}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
