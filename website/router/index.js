const express = require('express');
const index =  require('./controller/index');
const group = require('./controller/group');
const goods = require('./controller/goods');
const login = require('./controller/login');
const loginCheck = require('./controller/logincheck');
const loginout = require('./controller/loginout');

const router = express.Router();
router.get('/',index);
router.get('/group',group);
router.get('/goods',goods);
router.get('/login',login);
router.post('/logincheck',loginCheck);
router.get('/loginout',loginout);


module.exports = router;