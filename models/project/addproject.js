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
<<<<<<< HEAD
        },
        pricedue: {
            type: DataTypes.INTEGER
        },
        clientrequirement: {
            type: DataTypes.STRING
=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
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
<<<<<<< HEAD
        submittedproject: {
            type: DataTypes.STRING
        },
        submittoclient: {
            type: DataTypes.STRING
        },
=======

>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
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
<<<<<<< HEAD
        },
        adminId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'admins',
                key: 'id'
            }
=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
        }

    }, {
        createdAt: false,
        updatedAt: false
    })
    return newporject

}