//IMPORT
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const { DataTypes, Sequelize } = require('sequelize');
const { bookData } = require('./bookData');
const BookModel = require('./src/models/ficheLivre');

//INITIALISATION EXPRESS
const app = express();
const port = 2020;
app.use(morgan('dev'))
app.use(bodyParser.json())

const sequelize = new Sequelize('webook', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

//INITIALISATION BDD
const Book = BookModel(sequelize, DataTypes)

/* sequelize.sync({ force: true })
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
    }) */


//ROUTES
app.get('/greetings', (req, res) => {
    res.send('<h1>Bonjour les loulous</h1>')
});
// route : /books
app.get('/mainLibrary', (req, res) => {
    Book.findAll()
        .then(books => {
            const message = 'La bibliothèque principale a bien été recupérée';
            res.json({ message, data: books })
        })
});
// route : /book/:id
app.get('/mainLibrary/:id', (req, res) => {
    Book.findByPk(req.params.id)
        .then(book => {
            if (book) {
                const message = 'Un livre a bien été trouvé';
                res.json({ message, data: book });
            } else {
                const message = 'Le livre demandé n\'existe pas';
                res.status(404).json({ message });
            }
        })
        .catch(error => {
            const message = "Le livre n'a pas pu être récupéré. Réessayer dans quelques instants";
            res.status(500).json({ message, data: error });
        });
});

app.post('/mainLibrary', (req, res) => {
    Book.create(req.body)
        .then(book => {
            const message = `Le livre ${book.titre} a bien été crée.`
            res.json({ message, data: book })
        })
})
/**
 * Delete book 
 * make such that book exist
 */
app.use((req,res,next)=>{
    Book.findByPk(req.params.id)
        .then(livre => {
            if(livre == null){
                res.status(400).json({message:"Book not found",data:""});
                return;
            }
            res.book = livre;
            next()
        });
})

app.delete('/mainLibrary/:id', (req, res) => {
    Book.destroy({
        where: {id : req.book.id}
    });
    // Book.findByPk(req.params.id)
    //     .then(livre => {
    //         const livreSupprimé = livre;
    //         console.log(livre)
    //         Book.destroy({
    //             where: { id: livre.id }
    //         })
    //     })
    //     .then(_ => {
    //         const message = `le livre ${livreSupprimé.titre} a bien été supprimé.`
    //         res.json({ message, data: livreSupprimé })
    //     })
    //     .catch(_=>{
    //         const message ='pas de livre à cet id'
    //     })
}) 






app.use((req, res) => {
    res.send('<h1>Erreur 404,<br>Dommage ! :( </h1>')
})



app.listen(port, () => {
    console.log(`le server a bien commencé sur le port ${port}`)
})