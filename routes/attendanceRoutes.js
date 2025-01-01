const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Routes pour les pointages
router.get('/', attendanceController.getAllAttendances);
router.post('/', attendanceController.createAttendance);

module.exports = router;
