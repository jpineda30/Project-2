const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User",{

        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }

    });
    
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    })
    return User;
};