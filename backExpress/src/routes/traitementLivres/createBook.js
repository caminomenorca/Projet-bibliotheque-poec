const { Book } = require("../../db/sequelizeWebook");
module.exports = (app) => {
   app.post("/WeBook/mainLibrary/createBook", (req, res) => {
      Book.create({
         titre: req.body.titre,
         auteur: req.body.auteur,
         langue: req.body.langue,
         couverture: req.body.couverture,
         tags: req.body.tags,
      })
         .then((book) => {
            const message = `Le livre ${book.titre} a bien été crée.`;
            res.json({ message, data: book });
         })
         .catch((error) => {
            const message = `Le livre n'a pas pu être crée,déso. ${error}`;
            res.status(500).json({ message, data: error });
         });
   });
};
