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


app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
}); 

app.get('/Register/:phone/:name', function(req, res) {
    
    addUser(req.params.phone, req.params.name);

})


