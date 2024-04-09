import express from "express";
import { nuevoResultado } from "../controllers/resultadoController.js";

const Router = express.Router();
// /juego/result -> a esta ruta se hace la peticion http
Router.post('/result', nuevoResultado);

export default Router;