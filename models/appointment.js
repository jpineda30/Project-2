module.exports = function(sequelize,DataTypes){
    var Appointment = sequelize.define("Appointment",{
       /* id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            //onDelete: 'cascade',
            //onUpdate: 'cascade',
        },*/
        date_start:{
            type:DataTypes.DATE(6)
        },
        date_end:{
            type:DataTypes.DATE(6)
        },
        date_day:{
            type:DataTypes.DATEONLY
        },
        patient_id:{
            type:DataTypes.INTEGER
        },
        service_id:{
            type:DataTypes.INTEGER
        }

    });
    Appointment.associate = function(models) {
        Appointment.hasOne(models.Patient, {
          foreignKey: 'patient_id', as : 'Patient' 
        });

        Appointment.hasOne(models.Services, {
            foreignKey: 'service_id', as : 'Service', allowNull:true
          });
        
    };

    


    return Appointment;
};