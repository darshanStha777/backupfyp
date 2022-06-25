module.exports = (sequelize, DataTypes) => {
    const newporject = sequelize.define('project', {
        projectName: {
            type: DataTypes.STRING
        },
        projectcategory: {
            type: DataTypes.STRING
        },
        projectprice: {
            type: DataTypes.INTEGER
        },
        priceAdvance: {
            type: DataTypes.INTEGER
        },
        pricedue: {
            type: DataTypes.INTEGER
        },
        clientrequirement: {
            type: DataTypes.STRING
        },
        projectfile: {
            type: DataTypes.STRING
        },
        projectstartdate: {
            type: DataTypes.STRING
        },
        projectenddate: {
            type: DataTypes.STRING
        },
        submittedproject: {
            type: DataTypes.STRING
        },
        submittoclient: {
            type: DataTypes.STRING
        },
        teamId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'teams',
                key: 'id'
            }
        },
        clientId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clients',
                key: 'id'
            }
        },
        adminId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'admins',
                key: 'id'
            }
        }

    }, {
        createdAt: false,
        updatedAt: false
    })
    return newporject

}