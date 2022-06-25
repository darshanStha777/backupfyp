module.exports = (sequelize, DataTypes) => {
    const newclientmember = sequelize.define('message', {
        messageemail: {
            type: DataTypes.STRING
        },
        messagephone: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING
        }

    }, {
        createAt: false,
        updatedAt: false
    })
    return newclientmember

}