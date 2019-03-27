"use strict";

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

app.post("/getControllers1", function(req, res) {
  const pin = five.Pin(0);
  pin.query(function(state) {
    res.send({
      pinId: 1,
      pin1: state["value"]
    });
  });
});
app.post("/getControllers2", function(req, res) {
  const pin = five.Pin(5);
  pin.query(function(state) {
    res.send({
      pinId: 2,
      pin2: state["value"]
    });
  });
});
app.post("/getControllers3", function(req, res) {
  const pin = five.Pin(4);
  pin.query(function(state) {
    res.send({
      pinId: 3,
      pin3: state["value"]
    });
  });
});
app.post("/toggle1", function(req, res) {
  const pin = five.Pin(0);
  pin.query(function(state) {
    if (state['value'] === 0 ) {
      pin.high();
      res.send({
        pinId: 1,
        pin3: state["value"]
      });
    } else {
      pin.low();
      res.send({
        pinId: 1,
        value: state["value"]
      });
    }
  })
});
app.post("/toggle2", function(req, res) {
  const pin = five.Pin(5);
  pin.query(function(state) {
    if (state['value'] === 0 ) {
      pin.high();
      res.send({
        pinId: 2,
        pin3: state["value"]
      });
    } else {
      pin.low();
      res.send({
        pinId: 2,
        pin3: state["value"]
      });
    }
  })
});
app.post("/toggle3", function(req, res) {
  const pin = five.Pin(4);
  pin.query(function(state) {
    if (state['value'] === 0 ) {
      pin.high();
      res.send({
        pinId: 3,
        value: state["value"]
      });
    } else {
      pin.low();
      res.send({
        pinId: 3,
        value: state["value"]
      });
    }
  })
});

// function getState(id) {
//   var pin = id;
//   board.on("ready", () => {

//     pin.query(function(state) {
//       if (state['state'] === 0) {
//         console.log('trovato 0');
//         return 0;
//       } else {
//         console.log('trovato 1');
//         return 1;
//       }
//       // return console.log(state['state']);
//     });
//   });
// }

// app.get("/checkname/:name", function(req, res) {
//   board.on("ready", () => {
//     if (req.params.name.toLowerCase() === "controller_1") {

//       const pin = five.Pin(2);
//       pin.query(function(state) {
//         console.log(state);
//       });
//       res.send({state: state});
//     } else {
//       res.status(401).send({ message: "Sorry, no Homer's!" });
//     }
//   });
// });

app.listen(process.env.PORT || 8080);
//////////////////////////////////////
////   END SERVER PUT / GET REQUEST
//////////////////////////////////////

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
