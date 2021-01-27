module.exports = function(sequelize,DataTypes){

    var Treatments_Services = sequelize.define("Treatments_Services",{
      treatment_services_id: {
        type:DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        onDelete: 'cascade',
        onUpdate: 'cascade',
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
          foreignKey: 'id', as : 'Treatment' 
        });
        Treatments_Services.belongsTo(models.Services, {
          foreignKey: 'id',  as : 'Service' 
        });
    
    };


    return Treatments_Services;

};