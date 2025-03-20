var express = require('express');
var router = express.Router();

var { renderListClients, renderFormClients } = require('../controllers/clients');

/* GET users listing. */
router.get('/', renderListClients);

router.get('/register', renderFormClients);

module.exports = router;
