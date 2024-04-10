import express from "express";
import { 
    nuevoEquipo 
} from "../controllers/equipoController.js";

const Router = express.Router();

Router.post("/add",nuevoEquipo);

export default Router;


