import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const resultados = bd.define('resultados', {
    idResultados: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreResultados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Competencia_idCompetencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    },
    Notas_idNotas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
    
},{
    tableName: 'resultados', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  }

)

export default resultados;


