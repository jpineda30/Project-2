module.exports = function(sequelize,DataTypes){

    var Patient = sequelize.define("Patient",{

       /* pacient_id:{
            primary_key: true,
            type: DataTypes.UUID
        },*/
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
            foreignKey: {
                allowNull: false
              }
        });
        Patient.hasMany(models.Treatments, {
            foreignKey: {
                allowNull: false
              }
        });
      };

      

    return Patient;

};