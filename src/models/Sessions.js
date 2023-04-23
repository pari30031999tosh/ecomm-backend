const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



module.exports = (sequelize, DataTypes) =>{

    const Sessions = sequelize.define('Sessions', {
      email: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      sessionId: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    }, {
      // Other model options go here
      
    });

    return Sessions;
} 





