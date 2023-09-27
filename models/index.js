const User = require("./User");
const Cosplay = require("./Cosplay");

User.hasMany(Cosplay, {
    foreignKey: 'user_id',
});

Cosplay.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Cosplay };
