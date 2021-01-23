module.exports = function(sequelize,DataTypes){

    var Services = sequelize.define("Services",{

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
    
        Services.hasMany(models.Patients, {
          foreignKey: {
            allowNull: false
          }
        });
        Treatments.belongsTo(models.Services, {
            foreignKey: {
              allowNull: false
            }
        });

    return Services;

};