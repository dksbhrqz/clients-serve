var express = require('express'),
  app = express(),
  port = 3000,
  mongoose = require('mongoose'),
  Client = require('./models/clients-model'), //created model loading here
  bodyParser = require('body-parser');
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ClientsDB', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/clients-routes');
routes(app);

app.listen(port);

console.log('Clients RESTful API server started on: ' + port);