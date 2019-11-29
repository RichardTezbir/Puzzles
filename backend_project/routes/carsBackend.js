const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const url = "mongodb://localhost:27017/cars";

router.use(express.json());

const schemaCars = new mongoose.Schema({
  carName: { type: String, require: true, trim: true, minlength: 3 },
  spezetka: { type: String, require: true, minlength: 3 }
});

const Car = mongoose.model("car", schemaCars);

router.get("/", (req, res) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(db => {
      Car.find({}).then(cars => {
        console.log(cars);
        db.disconnect();
        res.send(cars);
      });
    })
    .catch(() => {
      res.status(400).send("wrong request");
    });
});
router.put("/:id", (req, res) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(connection => {
      Car.findOneAndUpdate(
        { _id: req.params.id },
        { carName: req.body.carName, spezetka: req.body.spezetka }
      ).then(car => {
        connection.disconnect();
        res.send(car);
      });
      console.log("fungiruje");
    })
    .catch(err => {
      res.status(400).send({ err: "neni databaza" });
    });
});

router.post("/", (req, res) => {
  const car = new Car({
    carName: req.body.carName,
    spezetka: req.body.spezetka
  });
  console.log(car);
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(db => {
      car
        .save()
        .then(inserted => {
          db.disconnect();
          res.status(201).send(JSON.stringify({ _id: inserted._id }));
        })
        .catch(msg => {
          db.disconnect();
          res.status(400).send({ error: "wrong data", msg: msg.errors });
        });
    })
    .catch(() => {
      res.status(400).send("wrong request");
    });
});

router.delete("/:id", (req, res) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(connection => {
      Car.findOneAndDelete({ _id: req.params.id })
        .then(car => {
          connection.disconnect();
          if (!car) {
            res.status(404).send({ message: "car was not found" });
          } else {
            res.send({ message: "car deleted" });
          }
        })
        .catch(err => {
          res.status(400).send(err);
          console.log(err);
        });
    })
    .catch(err => {
      res.status(400).send({ err: "neni databaza" });
    });
});

module.exports = router;
