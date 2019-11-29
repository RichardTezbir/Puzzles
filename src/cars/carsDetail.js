import React from "react";
import { useParams, Link } from "react-router-dom";

function CarsDetail() {
  let { carId } = useParams();

  return (
    <div>
      <h1>Car details</h1>
      <strong>Car name: </strong> {carId}
      <Link to="/cars">Go back</Link>
    </div>
  );
}

export default CarsDetail;
