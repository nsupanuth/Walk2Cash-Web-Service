const Sequelize = require('sequelize')

const fields = {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    title : Sequelize.STRING,
    imgUrl : Sequelize.STRING,
    eventUrl : Sequelize.STRING,
}

const options = {
    createdAt : false,
    updatedAt : false
}

module.exports = sequelizeInstance => {
    const Event = sequelizeInstance.define('Event',fields,options)
    //Event.sync({ force : true })
}