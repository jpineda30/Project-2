module.exports = function(sequelize,DataTypes){

    var Treatments = sequelize.define("Treatments",{
        
        name:{
            type:DataTypes.STRING
        }
  

    });

    return Treatments;

};