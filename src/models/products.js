const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



module.exports = (sequelize, DataTypes) =>{

    const Products = sequelize.define("products", {
  
      name: {
        type: DataTypes.STRING,
        
      },
      category: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      
    }, {
      // Other model options go here
      
    });

    return Products;
} 





