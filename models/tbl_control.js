/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_control', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cuse: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tbl_control'
  });
};
