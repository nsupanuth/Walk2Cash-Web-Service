const Sequelize = require('sequelize')

const fields = {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    imgUrl : Sequelize.STRING,
    productName : Sequelize.STRING,
    productDetail : Sequelize.STRING,
    point : Sequelize.INTEGER,
    category : Sequelize.STRING,
    productBrand : Sequelize.STRING,
    rating : Sequelize.FLOAT,
    claimed : Sequelize.BOOLEAN
}

const options = {
    createdAt : false,
    updatedAt : false
}

module.exports = sequelizeInstance => {
    const Product = sequelizeInstance.define('Product',fields,options)
    //Product.sync({ force : true })
}