//IMPORT
const express = require('express');
const morgan=require('morgan');
const { DataTypes, Sequelize } = require('sequelize');
const { bookData } = require('./bookData');
const BookModel = require('./src/models/ficheLivre')

//INITIALISATION EXPRESS
const app = express();
const port = 2020;
app.use(morgan('dev'))
const sequelize = new Sequelize('webook', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

//INITIALISATION BDD
const Book = BookModel(sequelize, DataTypes
)

sequelize.sync({force:true})
    .then(_ => {
        bookData.map(book => {
            Book.create({
                id: book.id,
                titre: book.titre,
                auteur: book.auteur,
                langue: book.langue,
                couverture: book.couverture,
                tags: book.tags
            })
        })
    })


//ROUTES
app.get('/greetings', (req, res) => {
    res.send('<h1>Bonjour les loulous</h1>')
});
app.get('/mainLibrary', (req, res) => {
    Book.findAll()
    .then(books=>{
        const message='La bibliothèque principale a bien été recupérée';
        res.json({message,data:books})
    })
});

app.get('/mainLibrary/:id',(req,res)=>{
    Book.findByPk(req.params.id)
    .then(book=>{
        const message='Un livre a bien été trouvé';
        res.json({message,data:book})
    })
})

app.post('/mainLibrary',(req,res)=>{
    Book.create(req.body)
    .then(book=>{
        const message=`Le livre ${book.titre} a bien été crée.`
        res.json({message,data:book})
    })
})






app.use((req, res) => {
    res.send('<h1>Erreur 404,<br>Dommage ! :( </h1>')
})



app.listen(port, () => {
    console.log(`le server a bien commencé sur le port ${port}`)
})