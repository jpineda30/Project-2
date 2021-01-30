module.exports = function(sequelize,DataTypes){

    var Services = sequelize.define("Services",{
        /* 
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            onDelete: 'cascade',
            onUpdate: 'cascade',
        }, */
        service_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        service_cost:{
            type:DataTypes.INTEGER,
            allowNull: false,   
        },
        service_observations:{
            type:DataTypes.TEXT,
            allowNull: false, 
        }
    });

 
       /* Services.associate = function(models) {

            Services.hasOne(models.Appointments, {
              foreignKey: 'id', as : 'Appointment' 
            });
            Services.belongsTo(models.Patient, {
              foreignKey: 'id',  as : 'Patient' 
            });
        };
*/

            return Services;

};