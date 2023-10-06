import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const curso_instru = bd.define('curso_instru', {
    Instructor_idInstructor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Curso_idCurso: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
    
},{
    tableName: 'curso_instru', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  }

)

export default curso_instru;


