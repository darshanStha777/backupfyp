module.exports = (sequelize, DataTypes) => {
    const newclientmember = sequelize.define('NewClient', {
        clientName: {
            type: DataTypes.STRING
        },
        clientAddress: {
            type: DataTypes.STRING
        },
        clientEmail: {
            type: DataTypes.STRING
        },
        clientpassword: {
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