import app from './app.js';
import sequelize from './database/db.js';
import { PORT } from './config.js';


import  './database/models/User.js';
import  './database/models/Competicion.js';
import './database/models/Partido.js';
import  './database/models/Prediccion.js';
import './database/models/Tabla.js';
import  './database/models/UserTabla.js';
import  './database/models/Fecha.js';

//Setting
const port = PORT;


app.listen(port, () => {
    console.log(`La app esta escuchando en el puerto: ${port}`);
  
    sequelize.sync({alter:true}).then( () => {
      console.log("Nos hemos conectado a la base de datos");
    }).catch(error =>{
       console.log("Se ha producido un error", error);
    })
});