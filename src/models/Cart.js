const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



module.exports = (sequelize, DataTypes) =>{

    const cart = sequelize.define("cart", {
  
      user_id: {
        type: DataTypes.STRING,
        
      },
      product_id: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      
    }, {
      // Other model options go here
      
    });

    return cart;
} 





