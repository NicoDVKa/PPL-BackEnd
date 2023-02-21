import express from 'express';

//Exporto las rutas
import userRoutes from './routes/User.Routes.js';
import userTablaRoutes from './routes/UserTabla.Routes.js';
import tablaRoutes from './routes/Tabla.Routes.js';
import competicionRoutes from './routes/Competicion.Routes.js';
import partidoRoutes from './routes/Partido.Routes.js';
import prediccionRoutes from './routes/Prediccion.Routes.js';
import fechaRoutes from './routes/Fecha.Routes.js';

//Configuracion del CORS
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Middleware
 app.use(express.json());


//Routes
app.use(userRoutes);
app.use(partidoRoutes);
app.use(prediccionRoutes);
app.use(competicionRoutes);
app.use(tablaRoutes);
app.use(userTablaRoutes);
app.use(fechaRoutes);

export default app;


