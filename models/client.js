module.exports = (sequelize, DataTypes) => {
    const newclinet = sequelize.define('client', {
        fullname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    }, {
        createAt: false,
        updatedAt: false
    })
    return newclinet

}