const Sequelize = require('sequelize');
const db = require('../connection');

const Business = db.define('business', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //description to be implemented later
    websiteLink: {
        type: Sequelize.STRING
        //website format hook
    },
    hours: {
        type: Sequelize.TEXT
        //default hours not given
    },
    openNow: {
        type: Sequelize.BOOLEAN
        //overrides hours
    },
    priceRange: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        // validate: { 
            // array can only have length of 2
        // }
    },
    latitude: {
        type: Sequelize.FLOAT
    },
    longitude: {
        type: Sequelize.FLOAT
    },
    // ^virtual method for giving coords as object
    touristFriendly: { 
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 5
        }
    },
    // paymentType: {
    //     type: 
    // }

})

module.exports = Business;
