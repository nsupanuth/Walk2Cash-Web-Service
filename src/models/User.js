const Sequelize = require('sequelize')

const fields = {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    username : Sequelize.STRING,
    password : Sequelize.STRING,
    firstName : Sequelize.STRING,
    lastName : Sequelize.STRING,
    email : Sequelize.STRING
}

const options = {
    underscored : true,
    createdAt : false,
    updatedAt : false
}

module.exports = sequelizeInstance => {
   const User = sequelizeInstance.define('User',fields,options)
   //User.sync({ force : true })
}
