import {Sequelize} from 'sequelize';
import {database} from'../config.js';

const sequelize = new Sequelize(
    database.database.database,
    database.database.username,
    database.database.password,
    {
        host: database.database.host,
        dialect : "postgres"
    }
);

export default sequelize;