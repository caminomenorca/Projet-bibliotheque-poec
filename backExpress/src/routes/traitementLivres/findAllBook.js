//const { Book } = require('../../db/sequelizeWebook')
const { Book } = require('../../db/sequelizeWebook')
module.exports = (app) => {
    // route : /books
    app.get('/WeBook/mainLibrary', (req, res) => {
        Book.findAll()
            .then(books => {
                const message = 'La bibliothèque principale a bien été recupérée';
                res.json({ message, data: books })
            })
            .catch(error => {
                const message = "la bibliothèque principale n'a pas pu être recupérée.Reessayer dans quelques instants."
                res.status(500).json({ message, data: error })
            })
    });
}