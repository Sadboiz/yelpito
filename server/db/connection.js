const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/yelpito", {
    logging: false
});

module.exports = connection;