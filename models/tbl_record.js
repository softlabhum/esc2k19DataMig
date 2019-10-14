/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_record', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    masterid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    controlid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    switchid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    calltype: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hosttype: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    audio: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tbl_record'
  });
};
