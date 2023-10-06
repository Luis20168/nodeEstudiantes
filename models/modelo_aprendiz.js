import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const aprendiz = bd.define('aprendiz', {
    idAprendiz: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreAprendiz: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passwordAprendiz: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailAprendiz: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Curso_idCurso: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
   
    
    
},{
    tableName: 'aprendiz', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  }

)

export default aprendiz;


