module.exports = function(sequelize,DataTypes){

    var Patient = sequelize.define("Patient",{
        patient_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        sex:{
            type: DataTypes.BOOLEAN
        },
        age:{
            type: DataTypes.INTEGER
        },
        previous_diseases:{
            type: DataTypes.TEXT
        }, 
        current_medication:{
            type: DataTypes.TEXT
        },
        allergies:{
            type: DataTypes.TEXT
        },  
        patient_observations:{
            type: DataTypes.TEXT
        }  
    });

    Patient.associate = function(models) {
        
        Patient.hasMany(models.Appointment, {
            foreignKey: "appointment_id",
           // through: "Appointment"
              
        });
      };

      

    return Patient;

};