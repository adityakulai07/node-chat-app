const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
//console.log(publicPath);

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
