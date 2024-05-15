// routes/stocksRoutes.js
const express = require('express');
const router = express.Router();
const rawStockController = require('../controllers/rawStockController');
const rawStockInput = require('../validations/rawStockInput');

router.get('/rawStock', rawStockController.rawStock);
router.post('/addRawStock', rawStockInput.rawStockInputValidate, rawStockController.addRawStock);

module.exports = router;