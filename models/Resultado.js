import mongoose from 'mongoose';

const RESULTADO_SCHEMA = mongoose.Schema({
    EquipoLocal:{type:String,required:true,trim:true},
    EquipoVisitante:{type:String,required:true,trim:true},
    Resultado:{type:String,required:true,trim:true}
});
const Resultado = mongoose.model("resultado",RESULTADO_SCHEMA);
export default Resultado;