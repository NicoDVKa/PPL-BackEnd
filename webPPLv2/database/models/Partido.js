import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Competicion from './Competicion.js';
import Fecha from './Fecha.js'

class Partido extends Model {}

Partido.init({

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true 
    },
    local:{
        type: DataTypes.STRING,
        allowNull: false
    },
    visitante:{
        type: DataTypes.STRING,
        allowNull: false
    },
    golLocal:{
        type: DataTypes.INTEGER,
        allowNull: true,
        DefaultValue : null
    },
    golVisitante:{
        type: DataTypes.INTEGER,
        allowNull: true,
        DefaultValue : null
    },
    fechaHora :{
        type: DataTypes.DATE,

    },
    enCurso : {
        type : DataTypes.INTEGER,
    },
    competicionId : {
        type : DataTypes.INTEGER,
        references :{
             model : Competicion,
             key : 'id',
        }
    },
    fechaId : {
        type : DataTypes.INTEGER,
        references :{
             model : Fecha,
             key : 'id',
        }
    }
  
    
},{
    sequelize,
    timestamps : false
});




export default Partido;