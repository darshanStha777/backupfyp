module.exports = (sequelize, DataTypes) => {
    const newadmin = sequelize.define('admin', {
        fullname: {
            type: DataTypes.STRING
        },
        dob: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phonenumber: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        createAt: false,
        updatedAt: false
    })
    return newadmin

}