module.exports = function(sequelize,DataTypes){
    var Appointment = sequelize.define("Appointment",{
        appointment_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        date_start:{
            type:DataTypes.DATE(6)
        },
        date_end:{
            type:DataTypes.DATE(6)
        },
    });
    Appointment.associate = function(models) {
        Appointment.belongsTo(models.Patient, {
          foreignKey: 'id', as : 'Patient' 
        });
         Appointment.hasOne(models.Treatments,{
        foreignKey:"id", as:"Treatments"
         });
/*     Appointment.associate = function(models) {
        // We're saying that a Appointment should belong to an a Patient, **** Service and Treatment??
        // A Apppointment can't be created without an Patient due to the foreign key constraint
        Appointment.belongsTo(models.Patient, {
            Patient: {
                as: "Patient",
                through: "last_name",
                foreignKey: "patient_id",
            },
        });
        Appointment.hasOne(models.Treatments, {
        Treatments:{
        as: "Treatment",
        through: "services_name",
        foreignKey: "services_id"
    }   
        }); */
    };
    return Appointment;
};