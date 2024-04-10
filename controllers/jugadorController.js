import Jugador from "../models/Jugador.js";
/**
 * Esta funcion agrega un nuevo jugador
 * @param {*} req datos a enviar
 * @param {*} res respuesta del servidor
 * @returns respuesta del operacion
 */
const nuevoJugador = async (req,res) =>{
    //req.body -> ahi deben estar los datos enviador desde el frontend
    const { Email, Camiseta } = req.body;
    const existeJug = await Jugador.findOne({$or:[
        {'Email':{$eq:Email}},{'Camiseta':{$eq:Camiseta}}
    ]});
    
    
    if(existeJug && existeJug.Email ===  Email){
        console.log(`Ya existe: ${existeJug}`);
        console.log("El email de jugador ya está registrado");
        return res.json({msg:"El email de jugador ya está registrado"});
    };
    
    if(existeJug && existeJug.Camiseta === Camiseta){
        console.log(`Ya existe: ${existeJug}`);
        console.log("La camiseta ya esta en uso");
        return res.json({msg:"La camiseta ya esta en uso"});
    };
    
    try{
        
        if(!existeJug){
            const nwJugador = new Jugador(req.body);
            const sved = await nwJugador.save();
            console.log("Registro exitso");
            return res.json({msg:"Registro exitoso"});
        }
        
    }catch(error){
        console.log("Error en servidor");
        return res.json({msg:"Registro Fallido"});
    }
}




export{
    nuevoJugador
}