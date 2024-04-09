import express from "express";
import { nuevoJugador } from "../controllers/jugadorController.js";


const Router = express.Router();

Router.post('/add', nuevoJugador);


export default Router;