const path = require('path');
const express = require('express');

module.exports = (app) => {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './notes.html'));
  });
};
