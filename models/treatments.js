const services = require("./services");
module.exports = function(sequelize,DataTypes){

    var Treatments = sequelize.define("Treatments",{
        treatment_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
        
    });

    Treatments.associate = function(models) {
    
    Treatments.belongsToMany(models.Services, {
        foreignKey: "treatment_id",
        through: "Treatments_Services"
    });


};

    return Treatments;

};