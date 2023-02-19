const { User } = require('../../db/sequelizeWebook');
module.exports=(app)=>{
    app.get('/WeBook/users',(req,res)=>{
        User.findAll()
        .then(users => {
            const message = 'La liste des utilisateurs a bien été recupérée';
            res.json({ message, data: users })
        })
        .catch(error => {
            const message = "la liste des utilisateurs n'a pas pu être recupérée.Reessayer dans quelques instants."
            res.status(500).json({ message, data: error })
        })
});
}
    