const db = require("../models");

module.exports = function(app){

    app.get("/user",(req,res)=>{

        db.User.findAll({}).then((response)=>{
                res.send(response);
        });
    });
    
};