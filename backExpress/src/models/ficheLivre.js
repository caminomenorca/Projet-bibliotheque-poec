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
                const tags=this.getDataValue('tags')
                if(tags){
                return tags.split(',')}
                else{return [];}
            },
            set(tags) {
                if (Array.isArray(tags)) {
                  this.setDataValue('tags', tags.join());
                } else {
                  this.setDataValue('tags', tags);
                }
              }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}