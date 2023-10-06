import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const competencia = bd.define('competencia', {
    idCompetencia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreCompetencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Curso_idCurso:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    
},{
    tableName: 'competencia', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  }

)

export default competencia;




