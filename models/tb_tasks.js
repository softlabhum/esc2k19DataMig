/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tasks', {
    id: {
      type: DataTypes.INTEGER(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_tasks'
  });
};
