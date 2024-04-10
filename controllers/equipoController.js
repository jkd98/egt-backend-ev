import Equipo from "../models/Equipo.js";

/**
 * Esta funcion registra un nuevo equipo
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const nuevoEquipo = async (req,res) => {
    const {NombreE,ILogotipo,Colores,Participates} = req.body;
    const existeEq = await Equipo.find({$or:[
        {'NombreE':{$eq:NombreE}},{'Colores':{$in:Colores}}
    ]});
    try {
        if(existeEq.length > 0){
            console.log(`Ya exite: ${existeEq}`);
            console.log("El equipo o colores ya estan en uso");
            return res.json({msg:"El equipo o colores ya estan en uso"});    
        }else{
            const nwEquipo =  new Equipo(req.body);
            const sved = await nwEquipo.save();
            console.log("Registro Equipo Exitoso");
            return res.json({msg:"Equipo Registrado"});
        }
    } catch (error) {
        console.log("Registro Equipo Fallido");
        return res.json({msg:"Equipo No Registrado"});
    }
}

/**
 * Esta funcion añade un nuevo jugador a un equipo
 */
const aggJugador = async (req,res) =>{
    
}

export {
    nuevoEquipo
}
