const treatments_services = require("./treatments_services");

module.exports = function(sequelize,DataTypes){

    var Services = sequelize.define("Services",{
        

        service_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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

    Services.associate = function(models) {
    
        Services.belongsToMany(models.Treatments, {
           
                foreignKey: "service_id",
                through: "Treatments_Services"
                
              }
               

            
        );


        }
            return Services;


};