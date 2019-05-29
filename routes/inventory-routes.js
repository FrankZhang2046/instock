const express = require('express');
const shortId = require('shortid');
const router = express.Router();
const inventoryData = require('../data/inventory.json');

const retrieveInventory = (req, res) => {
    res.json(inventoryData)
}

const postInventory = (req, res) => {
    const {
        name, description, quantity, lastOrdered, location, isInstock
    } = req.body;

    const newInventoryItem = {
        id: shortId.generate(),
        name,
        description,
        quantity,
        lastOrdered,
        location,
        isInstock,
        categories: "",
        warehouseId: "W0"
    };
    inventoryData.push(newInventoryItem);
    res.json(newInventoryItem);
}

router.get('/', retrieveInventory);
router.post('/', postInventory)

module.exports = router;