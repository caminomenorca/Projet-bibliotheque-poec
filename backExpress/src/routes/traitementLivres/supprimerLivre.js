const { Book } = require('../../db/sequelizeWebook');

module.exports = (app) => {

    app.delete('/WeBook/mainLibrary/:id', (req, res) => {
        Book.findByPk(req.params.id)
            .then(livre => {
                const livreSupprimé = livre;
                Book.destroy({
                    where: { id: livre.id }
                })

                    .then(_ => {
                        const message = `le livre ${livreSupprimé.titre} a bien été supprimé.`
                        res.json({ message})
                    })
                    .catch(_ => {
                        const message = 'pas de livre à cet id'
                        res.json({ message })
                    })
            })
    })}
/*  Book.destroy({
            where: { id: req.book.id }
        }); <- voir router et middleware pour généraliser*/