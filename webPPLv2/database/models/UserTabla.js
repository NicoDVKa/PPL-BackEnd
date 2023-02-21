import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Tabla from'./Tabla.js';
import User from './User.js';

class UserTabla extends Model{}

UserTabla.init({ 
    userId: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        references: {
          model: User, 
          key: 'id'
        }
      },
    tablaId: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        references: {
          model: Tabla,
          key: 'id'
        }
    },
    puntos:{
    type: DataTypes.INTEGER,
    allowNull: false,
    DefaultValue : 0
  },
  resultados:{
    type: DataTypes.INTEGER,
    allowNull: false,
    DefaultValue : 0
  },
  ganador:{
    type: DataTypes.INTEGER,
    allowNull: false,
    DefaultValue : 0
  }

},{
    sequelize,
    timestamps : false
});

export default UserTabla;