import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const notas = bd.define('notas', {
    idNotas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nota1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Nota2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    },
    Nota3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
    
},{
    tableName: 'notas', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  }

)

export default notas;


