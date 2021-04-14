var express = require('express');
var router = express.Router();

const HistoryController = require('../controllers/history');

/**
 * @route   GET /api/members/
 * @desc    Get all members
 * @access
 */

router.route('/')
    .get(HistoryController.findBuyHistoryByEmail);

router.route('/')
    .post(HistoryController.createBuy);

module.exports = router;