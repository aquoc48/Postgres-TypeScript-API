'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'role', // new field name
        {
          type: Sequelize.STRING,
          defaultValue: "user",
        })])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Users', 'role'),
    ]);
  }
};
