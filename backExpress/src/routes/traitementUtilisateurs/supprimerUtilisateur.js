const { User } = require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.delete('/WeBook/Users/delete/:id', (req, res) => {

        User.findByPk(req.params.id)
            .then(user => {
                const userSupprimé = user;
                console.log(user)
                User.destroy({
                    where: { id: user.id }
                })

                    .then(_ => {
                        const message = `le user ${userSupprimé.userName} a bien été supprimé.`
                        res.json({ message})
                    })
                    .catch(_ => {
                        const message = 'pas de user à cet id'
                        res.json({message})
                    })
            })
    })}
/*   User.destroy({
        where: { id: req.user.id }
    }); <- a généraliser plus tard avec middleware*/