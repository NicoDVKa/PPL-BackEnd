import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Competicion from './Competicion.js';

class Tabla extends Model {}

Tabla.init({
    
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true 
    },

    competicionId : {
        type : DataTypes.INTEGER,
        references : {
             model : Competicion,
             key : 'id'
        }
    }
   
   
},{
    sequelize,
    timestamps : false
});

export default Tabla;