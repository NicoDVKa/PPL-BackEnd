import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';


class User  extends Model {}

User.init({
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true 
    },
    name : {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName : "User",
    timestamps : false
});


export default User;