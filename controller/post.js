const path = require('path');
const Post = require('../model/post')
exports.GetPost = (req,res,next)=>{
    Post.findAll().then((posts)=>{
        res.render('index',{
            path:'/',
            posts: posts
        })
    })
    
};

exports.AddPost = (req,res,next) =>{
    const url = req.body.imageurl;
    const content = req.body.content
    Post.create({
        imageUrl: url,
        content: content
    }).then(()=>{
        res.redirect('/');
    })
    
}

exports.Addcomment = (req,res,next)=>{
    const comment = req.body.commentcontent;
    console.log(comment);
    res.redirect('/');

}