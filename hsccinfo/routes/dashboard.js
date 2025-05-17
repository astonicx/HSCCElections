var express = require('express');
var router = express.Router();
const auth=require("../middleware/verifyToken");


/* GET home page. */
router.get('/', auth, function(req, res, next) {
  if (process.env.CONSOLE_DEBUG=="true"){
    console.log("Dashboard");
  }
  if (!res.locals.role|| res.locals.role=="guest"){
    res.redirect('/logintest');
    res.render('logintest', { title: 'Please log in',message:'You need to log in to access page' });
  }
  else{ 
    res.render('dashboard', { title: 'Dashboard', username:res.locals.name, roles:res.locals.roles, userToken: res.locals.userToken });
  }
}
);
//Gratuitous comment
module.exports = router;