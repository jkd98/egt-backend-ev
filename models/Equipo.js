import  mongoose  from "mongoose";

//no se deben repetir datos
const equipoEschema = mongoose.Schema({
    NombreE:{type:String,required:true,trim:true},
    ILogotipo:{type:String},
    Colores:[],
    Participates:[]
});

const Equipo = mongoose.model("equipo",equipoEschema);

export default Equipo;