const Sequelize = require('sequelize')

const uri = 'mysql://nsupanuth:supanuth@ec2-54-169-53-185.ap-southeast-1.compute.amazonaws.com/Walk2Cash'
const options = {
    operatorsAliases : false,
    // logging : false  
}

module.exports = () => {

   const sequelizeInstance = new Sequelize(uri,options)
    
   sequelizeInstance.authenticate()
    .then(() => {
        console.log('Connected')
    })
    .catch(err => {
        console.log(err)
    })

    return sequelizeInstance
}

