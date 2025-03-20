var express = require('express');
var router = express.Router();

var { renderListAppointments, renderFormAppointments } = require('../controllers/appointments');

/* GET users listing. */
router.get('/', renderListAppointments);

router.get('/register', renderFormAppointments);

module.exports = router;
