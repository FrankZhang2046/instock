const express = require('express');
const router = express.Router();
const warehouseData = require('../data/warehouses.json');
const shortId = require('shortid');

const getWarehouse = (req, res) => {
    res.json(warehouseData)
}

const createWarehouse = (req, res) => {
    const { name, inventoryCategories } = req.body;
    const { street, suiteNum, city, province, postal } = req.body.address;
    const { title, phone, email } = req.body.contact;

    const newWarehouse = {
        id: shortId.generate(),
        name,
        address: {
            street,
            suiteNum,
            city,
            province,
            postal
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
    res.json(newWarehouse);
}

router.get('/', getWarehouse);
router.post('/', createWarehouse);

module.exports = router;