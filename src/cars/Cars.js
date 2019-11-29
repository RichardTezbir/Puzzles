import React, { Component } from "react";
import CarsTable from "./carsTable";
import { Link, useHistory } from "react-router-dom";

export default class Cars extends Component {
  state = {
    cars: [],
    editedCar: null,
    editingCar: false,
    newCar: false
  };

  componentDidMount() {
    console.log(">>>AFTER DISPLAYING THE Cars COMPONENT<<<");
    fetch("http://localhost:3000/cars")
      .then(res => res.json())
      .then(data => {
        this.setState({
          cars: data.map(e => {
            return {
              id: e._id,
              carName: e.carName,
              spezetka: e.spezetka
            };
          })
        });
        console.log(data);
      })
      .catch(console.log);
  }

  componentWillUnmount() {
    console.log(">>>BEFORE DISSAPEARING THE Cars COMPONENT<<<");
  }

  render() {
    return (
      <div>
        <h1>Cars example</h1>
        <CarsTable
          className="Table"
          carsData={this.state.cars}
          updateHandle={this.state.editingCar}
        />
      </div>
    );
  }
  showDetail = car => {
    const { history, match } = this.props;
    this.setState({
      editedCar: car
    });
    history.push(`${match.url}/car-update/${car.id}`);
  };
  updateCar = props => {
    const { cars } = this.state;
    this.setState({
      editingCar: true,
      editedCar: this.car
    });
  };
  updateHandleClick = index => {
    return <Link to={"/cars/cars-update/" + index.carName}></Link>;
  };

  newCar = props => {
    const { newCar } = this.state;
    this.setState({
      newCar: true
    });
  };

  removeCar = id => {
    const { cars } = this.state;
    console.log(id);
    fetch("http://localhost:3000/cars/" + id, {
      method: "DELETE"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          cars: cars.filter((car, i) => {
            return car.id !== id;
          })
        });
      })
      .catch(err => {
        console.log("Something gets wrong");
      });
  };
}
