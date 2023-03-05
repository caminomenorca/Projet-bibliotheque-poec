const { User } = require('../../db/sequelizeWebook');

module.exports = (app) => {
    app.post('/WeBook/Users/create', (req, res) => {
        User.create(req.body)
            .then(user => {
                const message = `L'utilisateur' ${user.userName} a bien été crée.`
                res.json({ message, data: user })
            })
            .catch(error => {
                const message = `L'utilisateur n'a pas pu être crée,déso.`
                res.status(500).json({ message, data: error.message })
            }
            )
    })
}