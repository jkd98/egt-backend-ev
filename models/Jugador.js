import mongoose from 'mongoose';

const JUGADOR_SCHEMA = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    Apellido:{type:String,required:true,trim:true},
    Apodo:{type:String,required:true,trim:true},
    Email:{type:String,required:true,trim:true}, //Campo email
    Equipo:{type:String,required:true,trim:true},
    Posicion:{type:String,required:true,trim:true}, //delantero, defensa, portero
    Edad:{type:Number,required:true,trim:true},
    Camiseta:{type:Number,required:true,trim:true}
    //se agregaran otros campos que hacen falta
})  

const Jugador = mongoose.model("usuario",JUGADOR_SCHEMA);
export default Jugador;