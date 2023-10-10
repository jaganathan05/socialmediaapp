const path = require('path');
const Post = require('../model/post')
const Comment = require('../model/comment');
const { where } = require('sequelize');
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
    const postId = req.params.postId
    Comment.create({
        text:comment,
        postId : postId

    }).then(()=>{
        res.redirect(`/post/${postId}`);
    })

}

exports.getComments = (req,res,next)=>{
    const postId = req.params.postId
    Post.findByPk(postId).then((post)=>{
        Comment.findAll({
            where: { postId: postId },
          }).then((comment)=>{
            res.render('post',{
                path: `post/${postId}`,
                post:post,
                comment:comment
            })
          })
    })
    

}

exports.DeleteComment = (req,res,next)=>{
    const CommentId = req.params.commentId;
    Comment.findByPk(CommentId).then((comment)=>{
        return comment.destroy();
    }).then(()=>{
        res.redirect('/')
    })
}

exports.DetelePost = (req,res,next)=>{
    const PostId = req.params.Id;
    Post.findByPk(PostId).then((post)=>{
        return post.destroy();
    }).then(()=>{
        res.redirect('/')
    })
}