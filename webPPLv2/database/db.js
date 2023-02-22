import {Sequelize} from 'sequelize';
import {DB_HOST, DB_NAME, DB_PASS,DB_PORT,DB_USER} from'../config.js';


const sequelize = new Sequelize(`postgres://
                    ${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);


export default sequelize;