const express = require("express");
// HTML Routes
const routes = require("./routes/htmlRoutes");
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', routes);


app.listen(PORT, function () {
    console.log(`Now listening on port http://localhost:${PORT}`);
  });
