const path = require('path');

app.get('/', (req, res) => {
  app.sendFile(path.join(__dirname, './index.html'));
});

module.exports = app