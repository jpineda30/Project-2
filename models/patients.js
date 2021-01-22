module.exports = function(sequelize,DataTypes){

    var Patient = sequelize.define("Patient",{

        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        sex:{

            type:DataTypes.BOOLEAN
        },
        age:{
            type:DataTypes.INTEGER
        }


    });

    return Patient;

};