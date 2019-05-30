const express = require('express');
const router = express.Router();
const warehouseData = require('../data/warehouses.json');
const shortId = require('shortid');

const getWarehouse = (req, res) => {
    res.json(warehouseData)
}

const createWarehouse = (req, res) => {
    const { name, inventoryCategories, street, title, phone, email } = req.body;
    const newWarehouse = {
        id: shortId.generate(),
        name,
        address: {
            street,
        },
        contact: {
            name,
            title,
            phone,
            email
        },
        inventoryCategories
    }
    warehouseData.push(newWarehouse);
    res.json(newW2arehouse);
}

router.get('/', getWarehouse);
router.post('/', createWarehouse);

module.exports = router;