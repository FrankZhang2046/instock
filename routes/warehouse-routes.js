const express = require('express');
const router = express.Router();
const warehouseData = require('../data/warehouses.json');

const getWarehouse = (req, res) => {
    res.json(warehouseData)
}

router.get('/', getWarehouse);

module.exports = router;