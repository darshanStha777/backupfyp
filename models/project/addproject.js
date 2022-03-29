module.exports = (sequelize, DataTypes) => {
    const newteamember = sequelize.define('AddNewProject', {
        projectName: {
            type: DataTypes.STRING
        },
        projectcategory: {
            type: DataTypes.STRING
        },
        projectprice: {
            type: DataTypes.STRING
        },
        priceAdvance: {
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
    }, {
        createAt: false,
        updatedAt: false
    })
    return newteamember

}