const Sequelize = require('sequelize');
const db = require('../connection');

const Review = db.define('review', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    starRating: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
})

module.exports = Review;