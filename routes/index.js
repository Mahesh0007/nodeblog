var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');
/* GET home page. */
router.get('/',function(req,res,next){
  var db=req.db;
  var posts=db.get('posts');

  posts.find({},{},function(err,posts){
    //console.log("The posts are : "+posts.JSON.stringify("utf8"));
    res.render('index',{posts:posts});
  });
});


module.exports = router;
