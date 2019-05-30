const express = require('express');
const router = express.Router();
const warehouseData = require('../data/warehouses.json');

const getWarehouse = (req, res) => {
    res.json(warehouseData)
}

const getSingleWarehouse = (req, res) => {
    // search for a single warehouse
    const foundWarehouse = warehouseData.find(warehouse => warehouse.id === req.params.id);

    //respond with message if not found?
    if (!foundWarehouse) {
        res.status(404).json({ error: 'A warehouse with that ID does not exist' });
    }

    // respond when a warehouse is found with a unique ID
    // res.json(foundWarehouse);
}

router.get('/', getWarehouse);
router.get('/:id', getSingleWarehouse);

module.exports = router;