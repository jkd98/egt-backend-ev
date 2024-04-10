import connectardb from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import express from "express";
import jugadorRoutes from "./routes/jugadorRoutes.js";
import resultadoRoutes from "./routes/resultadoRoutes.js";
import equipoRoutes from "./routes/equipoRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
connectardb();

//----------------- CORS
// Configurar CORS
    // Dominios Permitidos
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin:function(origin,callback){
        // Comprobar en la lista blanca
        if(whiteList.includes(origin)){
            // Puede consultar la API
            callback(null,true);
        }else{
            // No esta permitido
            callback(new Error("Error de CORS"));
        };
    }
};

app.use(cors(corsOptions));

app.use('/jugador',jugadorRoutes); // para rutas del jugador
app.use('/juego',resultadoRoutes); // para rutas del resultado
app.use('/equipo',equipoRoutes); // para rutas del resultado

//puerto
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log('Servidor corriendo en el puerto'+PORT);
})