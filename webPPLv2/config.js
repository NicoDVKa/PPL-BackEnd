export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASS = process.env.DB_PASS|| 'initdb';
export const DB_NAME = process.env.DB_NAME || 'webppl2';
export const DB_PORT = process.env.DB_PORT || 3307;

export const database = {
    database :{
        username : DB_USER,
        password : DB_PASS,
        database : DB_NAME,
        host : `${DB_HOST}:${DB_PORT}`
    }
}

