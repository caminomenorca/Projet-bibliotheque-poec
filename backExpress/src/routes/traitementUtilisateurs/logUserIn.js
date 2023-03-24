const { User } = require("../../db/sequelizeWebook");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken')
module.exports = (app) => {
   app.post("/WeBook/Users/login", async (req, res) => {
      if (req.body.userName && req.body.password) {
      ;
         const password = req.body.password;
         const user = await User.findOne({
            where: { userName: req.body.userName },
         });
         const token =jwt.sign({userName:user.userName,niveau:user.niveau},"55e52e534539b5549a3850a68ada309c")
         const isPasswordcorrect = bcrypt.compareSync(password, user.password);
         if (isPasswordcorrect) {
            res.status(200).json({ message: "you're connected",token:token });
         } else {
            res.status(400).json({ message: "wrong credential" });
         }
      } else {
         res.status(400).json({ message: "wrong credential" });
      }
   });
};
