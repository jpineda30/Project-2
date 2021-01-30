const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app){

    app.get("/user",(req,res)=>{

        db.User.findAll({}).then((response)=>{
                res.send(response);
        });
    });

    app.post("/user", (req, res) => { 
        db.User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            password:req.body.password,
            email:req.body.email
        }).then((user) => {
            res.json(user)
        })
    }) 
    app.post("/login", passport.authenticate("local"), (req, res) => {
        res.json({ user: req.user })
    })
    app.post("/signup", (req, res) => {
        db.User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            password:req.body.password,
            email:req.body.email 
        })
       res.send("You're signed up") 
    })
};