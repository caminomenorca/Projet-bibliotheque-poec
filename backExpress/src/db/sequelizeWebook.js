const { Sequelize, DataTypes } = require('sequelize');
const BookModel = require('../models/ficheLivre');
const {bookData} = require('./bookData');
const UtilisateurModel=require('../models/utilisateurs')

const sequelize = new Sequelize('webook', 'root', '1435puceronneorang1436', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

//INITIALISATION BDD
const Book = BookModel(sequelize, DataTypes);
const User= UtilisateurModel(sequelize,DataTypes);

const initDb = () => {
    User.Book = User.hasMany(Book)
    Book.User = Book.belongsTo(User)
    return sequelize.sync().then(_ => {
            console.log('la base de donnée a bien été initialisée !')
        })

}
const modelArray=[Book,User]
module.exports = {
    initDb, Book, User,modelArray
}