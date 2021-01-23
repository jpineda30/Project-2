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

    return Appointment;

};