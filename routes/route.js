const Express = require('express');
const postcontroller = require('../controller/post');
const router = Express.Router();

router.get('/',postcontroller.GetPost); 

router.post('/posts',postcontroller.AddPost);

router.post('/comment',postcontroller.Addcomment);

module.exports= router;