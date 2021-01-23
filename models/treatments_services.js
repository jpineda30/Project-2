module.exports = function(sequelize,DataTypes){

    var Treatments_Services = sequelize.define("Treatments_Services",{

        service_name:{
            type:DataTypes.STRING
        },
        pacient_name:{
            type:DataTypes.STRING
        },
    });

    return Treatments_Services;

};