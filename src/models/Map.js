const Sequelize = require('sequelize')

const fields = {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    title : Sequelize.STRING,
    latitude : Sequelize.DOUBLE,
    longitude : Sequelize.DOUBLE,
    address : Sequelize.TEXT,
    point : Sequelize.INTEGER,
    rating : Sequelize.FLOAT
}

const options = {
    createdAt : false,
    updatedAt : false
}

module.exports = sequelizeInstance => {
    const Map = sequelizeInstance.define('Map',fields,options)
    //Map.sync({ force : true })
 }