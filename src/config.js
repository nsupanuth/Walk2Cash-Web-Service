
module.exports = req => {
    const sequelizeInstance = req.app.locals.settings.db.sequelizeInstance    

    return {
        rawQueryOption : {
            type : sequelizeInstance.QueryTypes.SELECT
        }
    }
}
