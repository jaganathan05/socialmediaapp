const sequelize = require('../helper/database');

const Sequelize = require('sequelize'); 

const Post= sequelize.define('posts',{
    id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true
    },
    imageUrl:{
        type: Sequelize.STRING,
        allowNull:false
    },
    content:{
        type: Sequelize.STRING,
        allowNull:false

    }
})

module.exports = Post;