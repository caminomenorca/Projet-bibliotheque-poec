const { User } = require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.put('/WeBook/updateUser/:id', (req, res) => {
        const id = req.params.id;
        User.update(req.body, {
            where: { id: id }
        })
            .then(_ => {
                return User.findByPk(id)
                    .then(user => {
                        if (user === null) {
                            const message = "L'Utilisateur demandé n'existe pas.Réessayer avec un autre identifiant";
                            return res.statut(404).json({ message })
                        }
                        const message = `l'Utilisateur ${user.name} a bien été modifié.}`
                        res.json({ message, data: user })

                    })
                    .catch(error => {
                        const message = "L'Utilisateur n'a pas pu être modifié.Reesayer dans quelques instants"
                        res.status(500).json({ message, data: error })
                    })
            })

    })
}