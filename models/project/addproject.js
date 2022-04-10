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

        projectfile: {
            type: DataTypes.STRING
        },
        projectstartdate: {
            type: DataTypes.STRING
        },
        projectenddate: {
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
        }

    }, {
        createdAt: false,
        updatedAt: false
    })
    return newporject

}