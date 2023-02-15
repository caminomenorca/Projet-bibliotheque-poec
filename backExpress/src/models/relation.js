const ficheLivre=require('./ficheLivre');
const utilisateur=require('./utilisateurs');

utilisateur.hasMany(ficheLivre,{as:'ficheLivrePostée'})