"use strict";

//////////////////////////////////////
////   SERVER PUT / GET REQUEST
//////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var cors = require("cors");

var app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.post("/checkname", function(req, res) {
  if (req.body.name.toLowerCase() === "controller_1_on") {
    const pin = five.Pin(2);

    res.send({
      passed: true,
      message: "Controller 1 set to on!"
    });
    return pin.high();
  } else if (req.body.name.toLowerCase() === "controller_1_off") {
    const pin = five.Pin(2);

    res.send({
      passed: true,
      message: "Controller 1 set to off!"
    });
    return pin.low();
  } else if (req.body.name.toLowerCase() === "controller_2_on") {
    const pin = five.Pin(4);

    res.send({
      passed: true,
      message: "Controller 2 set to on!"
    });
    return pin.high();
  } else if (req.body.name.toLowerCase() === "controller_2_off") {
    const pin = five.Pin(4);

    res.send({
      passed: true,
      message: "Controller 2 set to off!"
    });
    return pin.low();
  } else {
    res.status(401).send({ message: "Sorry, no Homer's!" });
  }
});

app.get("/checkname/:name", function(req, res) {
  board.on("ready", () => {
    if (req.params.name.toLowerCase() === "controller_1") {
      const pin = five.Pin(2);

      pin.read((error, value) => {
        if (error) {
        } else {
          res.json({
            id: 1,
            status: value
          });
        }
      });
    } else {
      res.status(401).send({ message: "Sorry, no Homer's!" });
    }
  });
});

app.listen(process.env.PORT || 8080);
//////////////////////////////////////
////   END SERVER PUT / GET REQUEST
//////////////////////////////////////

//////////////////////////////////////////////////
////   DEFINE JHONNY FIVE COMUNICATION
//////////////////////////////////////////////////
const { EtherPortClient } = require("etherport-client");
const five = require("johnny-five");
const board = new five.Board({
  port: new EtherPortClient({
    host: "192.168.1.167",
    port: 8181
  }),
  repl: false
});

const LED_PIN = 2;
//////////////////////////////////////////////////
////   END DEFINE JHONNY FIVE COMUNICATION
//////////////////////////////////////////////////

//////////////////////////////////////////////////
////   EXAMPLE ON OFF PIN 2
//////////////////////////////////////////////////
// board.on("ready", () => {
//   board.pinMode(LED_PIN, five.Pin.OUTPUT);
//   // the Led class was acting hinky, so just using Pin here
//   const pin = five.Pin(LED_PIN);
//   let value = 0;

//   setInterval(() => {
//     if (value) {
//       pin.high();
//       console.log("TCL: app", app);
//       value = 0;
//     } else {
//       pin.low();
//       value = 1;
//     }
//     board.digitalRead(2, function(value) {
//     if (value === 1) {
//         console.log("right");
//     }
//     });
//   }, 1000);

// });
//////////////////////////////////////////////////
////   END EXAMPLE ON OFF PIN 2
//////////////////////////////////////////////////
