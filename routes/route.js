const Express = require('express');
const postcontroller = require('../controller/post');
const router = Express.Router();

router.get('/',postcontroller.GetPost); 

router.post('/posts',postcontroller.AddPost);

router.post('/comment/:postId',postcontroller.Addcomment);

router.get('/post/:postId',postcontroller.getComments);

router.post('/comment/delete/:commentId',postcontroller.DeleteComment);

router.post('/post/delete/:Id',postcontroller.DetelePost)

module.exports= router;