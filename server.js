const express = require('express');
const app = express();
const warehouseRoutes = require('./routes/warehouse-routes')
const cors = require('cors');
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('assets'));
app.use(cors());

app.use('/warehouse', warehouseRoutes)

app.listen(port, () => console.log(`listening on port ${port}`));