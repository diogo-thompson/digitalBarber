var express = require('express');
var router = express.Router();

var { renderHome, renderLogin } = require('../controllers/index')

/* GET home page. */
router.get('/', renderHome);

router.get('/login', renderLogin);

module.exports = router;
