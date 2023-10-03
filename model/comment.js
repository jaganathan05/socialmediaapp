const Sequelize = require('sequelize'); 
const sequelize = require('../helper/database');

const Comment = sequelize.define('comments',{
    text: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
})

module.exports = Comment;