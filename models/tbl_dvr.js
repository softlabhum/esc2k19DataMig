/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_dvr', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ipaddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    port: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comport: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comSetting: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tbl_dvr'
  });
};
