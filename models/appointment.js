module.exports = function(sequelize,DataTypes){

    var Appointment = sequelize.define("Appointment",{

        pacient_id:{
            type:DataTypes.STRING
        },
        treatement_id:{
            type:DataTypes.STRING
        },
        date:{
            type:DataTypes.DATE(6)
        },
        hour_range:{
            type:DataTypes.RANGE.sequelize.DATE
        },

    });

    Appointment.associate = function(models) {
        // We're saying that a Appointment should belong to an a Patient, **** Service and Treatment??
        // A Apppointment can't be created without an Patient due to the foreign key constraint
        Appointment.belongsTo(models.Patien, models.Services, models.Treatments, {
            Patiens: {
                as: "Patient",
                through: "last_name",
                foreignKey: "patient_id",
            },
            Services:{
                as: "Services",
                through: "services_name",
                foreignKey: "services_id"
            }

         
        


        
        });
    };

    return Appointment;
};