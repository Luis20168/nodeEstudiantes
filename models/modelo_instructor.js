import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const instructor = bd.define('instructor', {
    idInstructor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreInstructor: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    
    
},{
    tableName: 'competencia', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  }

)

export default instructor;


