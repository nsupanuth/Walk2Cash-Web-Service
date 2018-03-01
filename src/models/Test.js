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
    const Test = sequelizeInstance.define('Test',fields,options)
    console.log("Create test table")
    //Test.sync({ force : true })
}