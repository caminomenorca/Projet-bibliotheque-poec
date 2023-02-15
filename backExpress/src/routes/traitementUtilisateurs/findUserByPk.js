const { User } = require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.get('/WeBook/users/:id', (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                if (user) {
                    const message = 'Un utilisateur a bien été trouvé';
                    res.json({ message, data: user });
                } else {
                    const message = "L'utilisateur demandé n'existe pas";
                    res.status(404).json({ message });
                }
            })
            .catch(error => {
                const message = "L'utilisateur n'a pas pu être récupéré. Réessayer dans quelques instants";
                res.status(500).json({ message, data: error });
            });
    });
}