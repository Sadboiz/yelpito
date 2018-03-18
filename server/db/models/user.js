const Sequelize = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    },
    //local
    //usertype
    numberOfReviews: {
        type: Sequelize.INTEGER
        //updated by hook when reviews change
    }
})

module.exports = User;