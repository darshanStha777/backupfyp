module.exports = (sequelize, DataTypes) => {
    const newadmin = sequelize.define('admin', {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    }, {
        createAt: false,
        updatedAt: false
    })
    return newadmin

}