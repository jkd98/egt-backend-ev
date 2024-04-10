import Resultado from "../models/Resultado.js";

/**
 * Esta funcion agrega un nuevo jugador
 * @param {*} req datos a enviar
 * @param {*} res respuesta del servidor
 * @returns respuesta del operacion
 */

const nuevoResultado = async(req, res)=>{
    try{
        const nwResultado = new Resultado(req.body);
        const sved =  await nwResultado.save();
        console.log("Encuentro Registro exitso");
        return res.json({msg:"Registro exitoso"});
    }catch(error){
        console.log("Error en servidor");
        return res.json({msg:"Registro Fallido"});
    }
}

export{
    nuevoResultado
}