import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Competicion from './Competicion.js';

class Fecha extends Model {}

Fecha.init({

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true 
    },
    competicionId : {
        type : DataTypes.INTEGER,
        references :{
             model : Competicion,
             key : 'id',
        }
    },
    name : {
        type: DataTypes.STRING,
    }
   
},{
    sequelize,
    timestamps : false
});




export default Fecha;