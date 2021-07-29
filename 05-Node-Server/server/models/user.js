// email store string null = false
// password store string null = false

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return User;
};