const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port);

