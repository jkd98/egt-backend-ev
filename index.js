import connectardb from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import express from "express";
import jugadorRoutes from "./routes/jugadorRoutes.js";
import resultadoRoutes from "./routes/resultadoRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

connectardb();
app.use('/jugador',jugadorRoutes); // para rutas del jugador
app.use('/juego',resultadoRoutes); // para rutas del jugador
//puerto
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log('Servidor corriendo en el puerto'+PORT);
})