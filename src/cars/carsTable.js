import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";

const TableHeader = () => {
  return (
    <thead style={{ fontWeight: "bold" }}>
      <tr>
        <th scope="col">carName</th>
        <th scope="col">spezetka</th>
      </tr>
    </thead>
  );
};

// const TableBody = (props) => {
// const { charData, handleDelete } = props

const TableBody = ({ carsData, handleDelete, updateHandleClick }) => {
  const history = useHistory();
  console.log({ carsData });

  function handleClick(car) {
    history.push("/cars/car-detail/" + car.carName);
  }
  const rows = carsData.map((car, index) => (
    <tr className="car-table-row" key={index} onClick={() => handleClick(car)}>
      <td>
        <Link to={"/cars/cars-detail/" + car.carName}>{car.carName}</Link>
      </td>
      <td>{car.spezetka}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={e => {
            e.stopPropagation();
            updateHandleClick(index);
          }}
        >
          update
        </button>
      </td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={e => {
            e.stopPropagation();
            handleDelete(car.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

export default class CarsTable extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    console.log("   should update in table");
    return true;
  }

  //robi sa vzdy ked sa zmenia props a chcem si ich ulozit do this.state - bude deprecated!
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("   state => props");
    return prevState;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("   right before render");
    return prevState;
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("   after render");
  }

  render() {
    const { carsData, handleDelete, updateCar } = this.props;

    return (
      <div>
        <table className="table">
          <TableHeader />
          <TableBody
            carsData={carsData}
            handleDelete={handleDelete}
            updateHandle={updateCar}
          />
        </table>
      </div>
    );
  }
}
