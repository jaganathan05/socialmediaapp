const express = require('express');
const path = require('path');
const bodyparser = require('body-parser'); 
const sequelize = require('./helper/database');
const router = require('./routes/route')
const app = express(); 
const Posts = require('./model/post');
const comment = require('./model/comment');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','views');
Posts.hasMany(comment);
comment.belongsTo(Posts);
app.use(router)

sequelize.sync().then(()=>{
    app.listen(3000);
})
