module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.addColumn(
        'queues',
        'admissionControlEnabled',
        {
          type: Sequelize.BOOLEAN,
          default: false,
          after: 'messageEnabled',
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'queues',
        'admissionControlUrl',
        {
          type: Sequelize.TEXT,
          after: 'admissionControlEnabled',
        },
        { transaction }
      )
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.removeColumn('queues', 'admissionControlEnabled', {
        transaction,
      })
      await queryInterface.removeColumn('queues', 'admissionControlUrl', {
        transaction,
      })
    })
  },
}
