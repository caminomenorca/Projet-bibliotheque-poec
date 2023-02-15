const {User}=require('../../db/sequelizeWebook');
module.exports = (app) => {
    app.post('/WeBook/CreateUser',(req,res)=>{
        User.create(req.body)
       .then(user=>{
        const message = `L'utilisateur' ${user.userName} a bien été crée.`
                res.json({ message, data: user })
            })
            .catch(error => {
                const message = `L'utilisateur ${user.userName} n'a pas pu être crée,déso.`
                res.json({ message, data: error })
            }
            )
       })
    }