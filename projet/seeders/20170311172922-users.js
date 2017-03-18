'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        email: 'pierrehenri.debris@ynov.com',
        firstName: 'Pierre-Henri',
        lastName: 'Debris',
        balance: 300
      },
      {
        email: 'robin.lavayre@ynov.com',
        firstName: 'Robin',
        lastName: 'Lavayre',
        balance: 300
      },
      {
        email: 'jack.prevert@ynov.com',
        firstName: 'Jack',
        lastName: 'Prevert',
        balance: 300
      },
      {
        email: 'jean.dupont@ynov.com',
        firstName: 'Jean',
        lastName: 'Dupont',
        balance: 300
      },
      {
        email: 'marion.dupont@ynov.com',
        firstName: 'Marion',
        lastName: 'Dupont',
        balance: 300
      },
      {
        email: 'jean.martin@ynov.com',
        firstName: 'Jean',
        lastName: 'Martin',
        balance: 300
      },
      {
        email: 'martine.pin@ynov.com',
        firstName: 'Martine',
        lastName: 'Pin',
        balance: 300
      },
      {
        email: 'pierre.caillou@ynov.com',
        firstName: 'Pierre',
        lastName: 'Caillou',
        balance: 300
      },
      {
        email: 'gilles.pin@ynov.com',
        firstName: 'Gilles',
        lastName: 'Pin',
        balance: 300
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {}).then(function(){
      return queryInterface.bulkDelete('Operation', null, {})
    });
  }
};
