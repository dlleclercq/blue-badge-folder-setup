module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return User;
};