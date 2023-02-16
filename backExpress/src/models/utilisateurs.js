const bcrypt=require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Utilisateur', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            
        },
        niveau:{
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0,
            validate: {
                is: /^[0-2]$/i
              }
        },
        mail: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            set(value){
                this.setDataValue('password', bcrypt.hashSync(value,10));
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}