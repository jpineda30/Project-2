module.exports = function(sequelize,DataTypes){

    var Services = sequelize.define("Services",{
        /* 
        service_id: {
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
            /* defaultValue: false,  */
           
        },
        service_cost:{
            type:DataTypes.INTEGER,
            /* defaultValue: false,  */
            allowNull: false,
            
        },
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