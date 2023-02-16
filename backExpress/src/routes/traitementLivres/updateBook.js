const { Book } = require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.put('/WeBook/mainLibrary/:id', (req, res) => {
        
        const id = req.params.id;
        Book.update(req.body, {
            where: { id: id }
        })
            .then(_ => {
                return Book.findByPk(id)
                    .then(book => {
                        if (book === null) {
                            const message = "Le livre demandé n'existe pas.Réessayer avec un autre identifiant";
                            return res.statut(404).json({ message })
                        }
                        const message = `le livre ${book.titre} a bien été modifié.}`
                        res.json({ message, data: book })

                    })
                    .catch(error => {
                        const message = "Le livre n'a pas pu être modifié.Reesayer dans quelques instants"
                        res.status(500).json({ message, data: error })
                    })
            })

    })
}