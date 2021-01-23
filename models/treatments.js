module.exports = function(sequelize,DataTypes){

    var Treatments = sequelize.define("Treatments",{

        services_id:{
            type:DataTypes.INTEGER
        },
        pacient_id:{
            type:DataTypes.INTEGER
        },
        appointment_id:{
            type:DataTypes.INTEGER
        }
    });

    Treatments.associate = function(models) {
    
    Treatments.belongsTo(models.Patients, {
      foreignKey: {
        allowNull: false
      }
    });
    Treatments.belongsTo(models.Services, {
        foreignKey: {
          allowNull: false
        }
    });

};

    return Treatments;

};