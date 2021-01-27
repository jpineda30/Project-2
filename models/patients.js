module.exports = function(sequelize,DataTypes){

    var Patient = sequelize.define("Patient",{
/*         patient_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }, */
        first_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            validate:{
                isEmail: true,
            }
        },
        phone_number:{
            type: DataTypes.INTEGER,
/*             allowNull: false,
            validate: {
                len: [10, 18]
              } */
        },
        sex:{
            type: DataTypes.BOOLEAN,
            /* defaultValue: false, */
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
            foreignKey: "id",
           // through: "Appointment"
              
        });
      };

      

    return Patient;

};