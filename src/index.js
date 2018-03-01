const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

/* set up sequelizeInstance */
const sequelizeInstance = require('./sequelize.setup')()
const db = {
    sequelizeInstance
}
app.set('db',db)

/*set up model*/
require('./models/User')(sequelizeInstance)
require('./models/Map')(sequelizeInstance)
require('./models/Event')(sequelizeInstance)
require('./models/Product')(sequelizeInstance)
require('./models/Test')(sequelizeInstance)


/* set up router */
const router = require('./routes') //routes.js
app.use(router)

app.use(express.static(path.resolve(__dirname,'..','public')))

app.get('/',(req,res) => {
    res.send('Homepage')
})


app.listen(3000)