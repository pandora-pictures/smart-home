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
        state: true,
        pin3: state["value"]
      });
    } else {
      pin.low();
      res.send({
        pinId: 1,
        state: false,
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
        state: true,
        pin3: state["value"]
      });
    } else {
      pin.low();
      res.send({
        pinId: 2,
        state: false,
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
        state: false,
        value: state["value"]
      });
    } else {
      pin.low();
      res.send({
        pinId: 3,
        value: state["value"],
        state: true
      });
    }
  })
});

var pinStatus = [];
app.get("/getstatus", function(req, res) {
  const pin1 = five.Pin(0);
  const pin2 = five.Pin(5);
  const pin3 = five.Pin(4);
  
  pin1.query(function(state) {
    const index = pinStatus.findIndex((e) => e.id === 1);
    if (index === -1) {
        pinStatus.push( {id: 1 , state: state} );
    } else {
      pinStatus[index]['state'] = state;
    }
  });
  pin2.query(function(state) {
    const index = pinStatus.findIndex((e) => e.id === 2);
    if (index === -1) {
      pinStatus.push( {id: 2 , state: state} );
    } else {
      pinStatus[index]['state'] = state;
    }
  });
  pin3.query(function(state) {
    const index = pinStatus.findIndex((e) => e.id === 3);
    if (index === -1) {
        pinStatus.push( {id: 3 , state: state} );
    } else {
      pinStatus[index]['state'] = state;

    }
  });
  res.send({ pinStatus });
});

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
