const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();

require('./apiRoute')(app);
require('./htmlRoute')(app);

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT );
});
