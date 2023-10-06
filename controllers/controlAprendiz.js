
//modelos tablas
import aprendiz from '../models/modelo_aprendiz.js';


export const getAllDatos= async (req,res)=>{
    try{
        const apdz= await aprendiz.findAll();
        res.json(apdz);

    }catch(error){
        console.log(error)

    }
}


export const getApdz = async (req, res) => {
    try {
        const apdz = await aprendiz.findAll({
            where: { id: req.params.id }
        });

        res.json(apdz[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createApdz = async (req, res) => {
    try {
        await aprendiz.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        })
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const UpdateApdz = async (req, res) => {
    try {
        await aprendiz.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro actualizado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const DeleteApdz = async (req, res) => {
    try {
        await aprendiz.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro eliminado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}




