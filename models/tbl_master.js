/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_master', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    setting: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    port: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cuse: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tbl_master'
  });
};
