module.exports = function(sequelize,DataTypes){

    var Services = sequelize.define("Services",{

        services_id:{
            primary_key: true,
            type:DataTypes.UUID
        },
        services_name:{
            type:DataTypes.STRING
        },
        services_cost:{
            type:DataTypes.INTEGER
        },
        service_observations:{
            type:DataTypes.TEXT
        },   
    });

    return Services;

};