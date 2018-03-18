const Business = require('./business');
const User = require('./user');
const Review = require('./review');

Business.hasMany(Review);
Review.belongsTo(Business);

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
    Business,
    User,
    Review
}