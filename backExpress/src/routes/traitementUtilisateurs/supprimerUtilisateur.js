const {User}=require('../../db/sequelizeWebook');
module.exports=(app)=>{app.delete('/WeBook/deleteUser/:id', (req, res) => {
    User.destroy({
        where: { id: req.user.id }
    });
     /* User.findByPk(req.params.id)
         .then(user => {
             const userSupprimé = user;
             console.log(user)
             User.destroy({
                 where: { id: user.id }
             })
         })
         .then(_ => {
             const message = `le user ${userSupprimé.userName} a bien été supprimé.`
             res.json({ message, data: userSupprimé })
         })
         .catch(_=>{
             const message ='pas de user à cet id'
         }) */
})}
