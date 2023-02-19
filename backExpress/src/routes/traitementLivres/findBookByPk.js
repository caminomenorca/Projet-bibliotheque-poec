const { Book } = require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.get('/WeBook/mainLibrary/:id', (req, res) => {
        Book.findByPk(req.params.id)
            .then(book => {
                if (book) {
                    const message = 'Un livre a bien été trouvé';
                    res.json({ message, data: book });
                } else {
                    const message = "Le livre demandé n'existe pas";
                    res.status(404).json({ message });
                }
            })
            .catch(error => {
                const message = "Le livre n'a pas pu être récupéré. Réessayer dans quelques instants";
                res.status(500).json({ message, data: error });
            });
    });
}