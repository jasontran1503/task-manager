const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');

router.route('/')
    .post(taskController.createTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router;
