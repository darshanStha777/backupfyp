module.exports = (sequelize, DataTypes) => {
    const newclientmember = sequelize.define('client', {
        clientName: {
            type: DataTypes.STRING
        },
        clientAddress: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        clientPhone: {
            type: DataTypes.STRING
        },
        clientgender: {
            type: DataTypes.STRING
        },

    }, {
        createAt: false,
        updatedAt: false
    })
    return newclientmember

}