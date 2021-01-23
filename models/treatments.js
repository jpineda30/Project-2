module.exports = function(sequelize,DataTypes){

    var Treatments = sequelize.define("Treatments",{

        treatment_id:{
            primary_key: true,
            type:DataTypes.UUID
        },
        services_name:{
            type:DataTypes.STRING
        },
        pacient_id:{
            type:DataTypes.STRING
        },
        appointment_id:{
            type:DataTypes.STRING
        }
    });

    Treatments.associate = function(models) {
    
    Treatments.belongsTo(models.Patients, {
      foreignKey: {
        allowNull: false
      }
    });
};

    return Treatments;

};