import mongoose from 'mongoose';

const JUGADOR_SCHEMA = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    ApellidoP:{type:String,required:true,trim:true},
    ApellidoM:{type:String,required:true,trim:true},
    Apodo:{type:String,trim:true},
    Email:{type:String,required:true,trim:true}, //Campo email
    FechaNac:{type:Date},
    Posicion:{type:String,required:true,trim:true}, //delantero, defensa, portero
    Camiseta:{type:Number,required:true,trim:true},
    Peso:{type:Number,required:true,trim:true},
    Estatura:{type:Number,required:true,trim:true},
    Foto:{type:String,required:true,trim:true},
    Equipo:{type:String,trim:true}
})  

const Jugador = mongoose.model("jugador",JUGADOR_SCHEMA);
export default Jugador;