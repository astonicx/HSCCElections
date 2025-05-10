var express = require('express');
var router = express.Router();
const auth = require("../middleware/verifyToken");

/* GET BDPA History page. */
router.get('/', auth,function(req, res, next) {
  res.render('bdpahistory', { title: 'BDPA History', username:res. locals. name,roles:res.locals.roles, userToken: res.locals.userToken });
});

module.exports = router;
