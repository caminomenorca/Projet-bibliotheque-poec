module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Livre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        auteur: {
            type: DataTypes.STRING,
            allowNull: false
        },
        langue: {
            type: DataTypes.STRING,
            allowNull: true
        },
        couverture: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){ 
                return this.getDataValue('tags').split(',')
            },
            set(types){
                this.setDataValue('tags',types.join())
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}