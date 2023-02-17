const {User} = require('../../db/sequelizeWebook');
const bcrypt=require('bcrypt');
module.exports=(app)=>
{app.get('/login', async (req, res) => {
    const token = null;
    const password = req.body.password;
    const user = await User.findOne({ where: { userName: req.body.userName } })
    const isPasswordcorrect = bcrypt.compareSync(password, user.password);
    if (isPasswordcorrect) {
        res.status(200).json({ message: "you're connected" })
    }
    else { res.status(400).json({ message: 'wrong credential' }) }
})}