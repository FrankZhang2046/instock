const express = require('express');
const router = express.Router();
const inventoryData = require('../data/inventory.json');

const retrieveInventory = (req, res) => {
    res.json(inventoryData)
}

router.get('/', retrieveInventory);

module.exports = router;