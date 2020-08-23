const express = require('express');
const router = express.Router();

const listController = require('../controllers/list.controller');

router.route('/')
    .get(listController.getAllList)
    .post(listController.createList)
    .put(listController.updateList)
    .delete(listController.deleteList);

router.get('/detail', listController.getListDetail)  

module.exports = router;
