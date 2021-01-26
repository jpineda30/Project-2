module.exports = function(sequelize,DataTypes){

    var Treatments_Services = sequelize.define("Treatments_Services",{
      treatment_services_id: {
        type:DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
      service_cost:{
      type:DataTypes.INTEGER
    },
    /*,
    service_id:{
            
      type:DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'Services',
        key: 'service_id'
      }

    },
    treatments_id:{
            
      type:DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'Treatments',
        key: 'treatment_id'
      }
      },
*/
    
    });


    Treatments_Services.associate = function(models) {
    
        Treatments_Services.belongsTo(models.Treatments, {
          foreignKey: 'treatment_id', as : 'Treatment' 
        });
        Treatments_Services.belongsTo(models.Services, {
          foreignKey: 'service_id',  as : 'Service' 
        });
    
    };


    return Treatments_Services;

};