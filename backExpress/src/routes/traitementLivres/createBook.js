const { Book } = require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.post('/WeBook/mainLibrary/createBook', (req, res) => {
        Book.create(req.body)
            .then(book => {
                const message = `Le livre ${book.titre} a bien été crée.`
                res.json({ message, data: book })
            })
            .catch(error => {
                const message = `Le livre ${book.titre} n'a pas pu être crée,déso.`
                res.status(500).json({ message, data: error })
            }
            )
    })

}