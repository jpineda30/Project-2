module.exports = function(sequelize,DataTypes){

    var Services = sequelize.define("Services",{

        service_id:{
            primary_key: true,
            type:DataTypes.UUID
        },
        service_name:{
            type:DataTypes.STRING
        },
        service_cost:{
            type:DataTypes.INTEGER
        },
        service_observations:{
            type:DataTypes.TEXT
        },   
    });

    return Services;

};