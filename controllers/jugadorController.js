import Jugador from "../models/Jugador.js";
/**
 * Esta funcion agrega un nuevo jugador
 * @param {*} req datos a enviar
 * @param {*} res respuesta del servidor
 * @returns respuesta del operacion
 */
const nuevoJugador = async (req,res) =>{
    try{
        //req.body -> ahi deben estar los datos enviador desde el frontend
        const nwJugador = new Jugador(req.body);
        const sved = nwJugador.save();
        console.log("Registro exitso");
        return res.json({msg:"Registro exitoso"});
    }catch(error){
        console.log("Error en servidor");
        return res.json({msg:"Registro Fallido"});
    }
}




export{
    nuevoJugador
}