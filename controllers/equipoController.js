import Equipo from "../models/Equipo.js";

/**
 * Esta funcion registra un nuevo equipo
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const nuevoEquipo = async (req,res) => {
    try {
        const nwEquipo =  new Equipo(req.body);
        const sved = nwEquipo.save();
        console.log("Registro Equipo Exitoso");
        return res.json({msg:"Equipo Registrado"});
    } catch (error) {
        console.log("Registro Equipo Fallido");
        return res.json({msg:"Equipo No Registrado"});
    }
}

export {
    nuevoEquipo
}
