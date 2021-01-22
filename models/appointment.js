module.exports = function(sequelize,DataTypes){

    var Appointment = sequelize.define("Appointment",{

        pacient:{
            type:DataTypes.STRING
        },
        treatement:{
            type:DataTypes.STRING
        },
        date:{
            type:DataTypes.DATEONLY
        },
        slot:{
            type:DataTypes.INTEGER
        },

    });

    return Appointment;

};