module.exports = function(sequelize,DataTypes){

    var Treatments = sequelize.define("Treatments",{

        treatment_id:{
            primary_key: true,
            type:DataTypes.UUID
        },
        treatment_name:{
            type:DataTypes.STRING
        },
        pacient_id:{
            type:DataTypes.STRING
        },
        appointment_id:{
            type:DataTypes.STRING
        }
    });

    return Treatments;

};