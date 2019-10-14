/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_map', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cuse: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tbl_map'
  });
};
