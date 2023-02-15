const { Book } = require('../../db/sequelizeWebook');

module.exports = (app) => {

    app.delete('/WeBook/mainLibrary/:id', (req, res) => {
        Book.destroy({
            where: { id: req.book.id }
        });
        // Book.findByPk(req.params.id)
        //     .then(livre => {
        //         const livreSupprimé = livre;
        //         console.log(livre)
        //         Book.destroy({
        //             where: { id: livre.id }
        //         })
        //     })
        //     .then(_ => {
        //         const message = `le livre ${livreSupprimé.titre} a bien été supprimé.`
        //         res.json({ message, data: livreSupprimé })
        //     })
        //     .catch(_=>{
        //         const message ='pas de livre à cet id'
        //     })
    })
}