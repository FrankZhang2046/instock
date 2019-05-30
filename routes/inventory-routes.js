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

router.delete('/:id', (req, res) => {
    const deleteItem = inventoryData.filter(item => {
      return item.id !== req.params.id
    })
    if (deleteItem) {
      inventory.splice(deleteItem, 1)
      res.send('Item deleted.')
    } else {
      res.status(400).send('Item not found.')
    }
    res.json(req.body)
  })

router.get('/', retrieveInventory);
router.post('/', postInventory)

module.exports = router;