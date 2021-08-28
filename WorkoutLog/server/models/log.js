module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('Log', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        definition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        result: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER
        }
    })
    return Log;
};