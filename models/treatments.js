module.exports = function(sequelize,DataTypes){

    var Treatments = sequelize.define("Treatments",{
        treatment_id: {
            primary_key: true,
            type:DataTypes.UUID,
          
            onDelete: 'cascade',
            onUpdate: 'cascade',

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