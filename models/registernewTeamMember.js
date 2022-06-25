module.exports = (sequelize, DataTypes) => {
    const newteamember = sequelize.define('team', {
        memberName: {
            type: DataTypes.STRING
        },
        position: {
            type: DataTypes.STRING
        },
        contactNumber: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        teamaddimage: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        adminId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'admins',
                key: 'id'
            }
        }
    }, {
        createAt: false,
        updatedAt: false
    })
    return newteamember

}