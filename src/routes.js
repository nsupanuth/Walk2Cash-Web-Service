const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()


router.get('/users',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const User = sequelizeInstance.models.User

    const options = {
        attributes : {
            exclude : ['password']
        },
        limit : 10
    }
    
    User.findAll(options)
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })
})


router.post('/register',(req,res) => {
    
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const User = sequelizeInstance.models.User

})


router.post('/userlogin',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const User = sequelizeInstance.models.User

    const currentUser = req.body

    const options = {
        where : {
            username : currentUser.username
        },
        attributes : {
            exclude : ['password']
        }
    }

    User.findAll(options)
        .then(records => {
            // console.log(records.get().length)
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })

})

router.get('/maps',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const Map = sequelizeInstance.models.Map

    Map.findAll()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })

})

router.post('/addPin',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const Map = sequelizeInstance.models.Map

    const newMap = req.body

    Map.create(newMap)
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/events',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const Event = sequelizeInstance.models.Event

    Event.findAll()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/products',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const Product = sequelizeInstance.models.Product

    Product.findAll()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })
        
})

router.post('/register',(req,res) => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance
    const User = sequelizeInstance.models.User

    // const newUser = {
    //     first_name : 'Mike',
    //     last_name : 'Peet'
    // }

    const newUser = req.body
    console.log(newUser)

    User.create(newUser)
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json(err)
        })

})

module.exports = router