import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


const Curso = db.define('Curso', {
    idCurso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreCurso: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  }, {
    tableName: 'Curso', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los campos createdAt y updatedAt
  });

export default Curso;


