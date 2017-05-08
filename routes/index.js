var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("access to index")
});

router.get('/login',function(req, res, next){
	console.log("access to login")
	res.sendfile('./public/html/login.html')
})


router.get('/front',function(req, res, next){
	console.log("access to front")
	res.sendfile('./public/html/front.html')
})


router.get('/back',function(req, res, next){
	console.log("access to back")
	res.sendfile('./public/html/back.html')
})

router.get('/chat',function(req, res, next){
	console.log("access to chat")
	res.sendfile("./public/html/chat.html")
})


module.exports = router;
