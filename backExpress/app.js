//IMPORT
const express = require('express');
const morgan = require('morgan');
const sequelize = require('./src/db/sequelizeWebook');
const cors=require('cors')


//INITIALISATION EXPRESS
const app = express();
const port = 2020;

//MIDDLEWARE
app
    .use(morgan('dev'))
    .use(express.json())//->peut être remplacé par express.json
    .use(cors());

sequelize.initDb()

//ROUTES
////////traitementLivres:
require('./src/routes/traitementLivres/createBook')(app);
require('./src/routes/traitementLivres/findAllBook')(app);
require('./src/routes/traitementLivres/findBookByPk')(app)
require('./src/routes/traitementLivres/supprimerLivre')(app);
require('./src/routes/traitementLivres/updateBook')(app);
////////traitementUtilisateurs
require('./src/routes/traitementUtilisateurs/createUser')(app);
require('./src/routes/traitementUtilisateurs/findUserByPk')(app);
require('./src/routes/traitementUtilisateurs/findAllUsers')(app);
require('./src/routes/traitementUtilisateurs/supprimerUtilisateur')(app);
require('./src/routes/traitementUtilisateurs/updateUser')(app);
require('./src/routes/traitementUtilisateurs/logUserIn')(app);




app.use(({ res }) => {
    const message = 'Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL.';
    res.status(404).json({ message })
})



app.listen(port, () => {
    console.log(`le serveur a bien commencé sur le port ${port}`)
});
