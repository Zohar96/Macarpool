// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://chenzi:1234@cluster0-oqlvc.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

function addUser(phone, name) {
  client.connect(err => {
    const cursor = client.db("Macarpool").collection("users").insertOne({
        costumer: phone,
        EmployeeName: name
    }, function (err, result) {
        console.log("Inserted document into the collection");
    });

    // perform actions on the collection object
    client.close();
  });
}

function addNewRide(phone, p1, p2, p3, dest, source, date) {
  client.connect(err => {
    const cursor = client.db("Macarpool").collection("ways").insertOne({
        driverPhone: phone,
        p1: p1,
        p2:p2,
        p3:p3,
        dest:dest,
        source:source,
        date:date
    }, function (err, result) {
        console.log("Inserted document into the collection");
    });

    // perform actions on the collection object
    client.close();
  });
}

app.get('/newRide/:phone/:p1/:p2/:p3/:dest/:source/:date', function(req, res) {
  addNewRide(req.params.phone,
          req.params.p1,
          req.params.p2,
          req.params.p3,
          req.params.dest,
          req.params.source,
          req.params.date);
  res.send(200);
})



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
}); 

app.get('/Register/:phone/:name', function(req, res) {
    addUser(req.params.phone, req.params.name);
    res.send(200);
})

app.get("/getAllUsers", function (req, res) {
  var allUsers = [];
  client.connect(err => {
    const cursor = client.db("Macarpool").collection("users").find({}).toArray(function(err, result) {
      allUsers=result;
      if (err) throw err;
      console.log(result);
      return res.send(allUsers);
    })
    // perform actions on the collection object
    client.close();
  });
})

app.get("/getAllWays",function (req, res) {
  var ways =getWays();
  res.send(ways);
})

function getWays() {
  var allWays = [];
  client.connect(err => {
    const cursor = client.db("Macarpool").collection("ways").find({}).toArray(function(err, result) {
      allWays=result;
      if (err) throw err;
      console.log(result);
    })
    // perform actions on the collection object
    client.close();
  });
  return allWays;
}

app.get("/getAllRequest",(req, res) => {
  var allRequest = [];
  client.connect(err => {
    const cursor = client.db("Macarpool").collection("requests").find({}).toArray(function(err, result) {
      allRequest=result;
      if (err) throw err;
      console.log(result);
      return res.send(allRequest);
    })
    // perform actions on the collection object
    client.close();
  });
})

app.get("/getWayOfDriver/:driverPhone",function(req,res){
  var ways = getWays();
  var waysOfDrivers = [];

  client.connect(err => {
    client.db("Macarpool").collection("ways").find({'driverPhone':req.params.driverPhone}).toArray(function(err, result) {
      waysOfDrivers=result;
      if (err) throw err;
      return res.send(waysOfDrivers);
    })
  });
  
  
})
