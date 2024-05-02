const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("index.js")
class document extends Model {}

document.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    Province: {
        type: DataTypes.STRING,
        autoIncrement: true, 
        values: ['Beni Mellal', 'Khouribga','Azilal','Fequih Ben Saleh'],   
    },

    Communes: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Intitulededocument: {   
        type: DataTypes.STRING,
        values: ['PA', 'PDAR','SDAU'],
        allowNull: false 
    },

    Responsables: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Collaborateurs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    Bet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    Situation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Obsrevations: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Document: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    

},{
    sequelize:sequelize,
    modelName:"document"
})

module.exports = document