const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

require('./apiRoute.js')(app);
require('./htmlRoute.js')(app);

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT );
});
