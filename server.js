const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Student, Address } = require("./models/studentsSchema");
dotenv.config({
  path: "./config.env",
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connect to DB"));

const PORT = 8000;

app.use(express.json());

app.post("/new-student/", (req, res) => {
  const address = new Address({
    streetNumber: req.body.streetNumber,
    streetName: req.body.streetName,
    postCode: req.body.postCode,
    city: req.body.city,
  });

  address.save(function (err) {
    console.log(err);
    console.log(address);
    const student = new Student({
      firstName: req.body.firstName,
      surName: req.body.surName,
      address: address._id,
    });

    student.save((err) => {
      console.log(err);
    });
  });
  //   try {
  //       address
  //   } catch (err) {

  //   }
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
