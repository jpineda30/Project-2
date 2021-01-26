const db = require("../models");

module.exports = function(app){

    app.post("/addService",(req,res)=>{
        console.log(req.body);
        db.Services.create({

            service_name:req.body.service_name,
            service_cost:req.body.service_cost,
            email:req.body.email,
            service_observations: req.body.service_observations,


        }).then((response)=>{
                res.send(response);
        });
    });


    app.get("/services"), function(req,res){
        db.Services.findAll({}).then(function(dbServices){
            console.log("en data Services");
            console.log("req.body",req.body);
            console.log("dbServices",dbServices);
            res.json(dbServices);
        });
    };

/*     app.get("/services",(req,res)=>{

       // res.render("patients","")
        console.log("estamos aqui");
        db.Services.findAll({
            //where:{sex:true},
            attributes:["sevice_id","service_name","service_cost","service_observations"],
    
        }).then((services)=>{
              
                
                let Services = services.map((obj)=>{
                    let service = obj.dataValues;
                    return service
                });

               
                res.render("services",{Services})
        });
        
    });

    app.get("/viewServices/:id",(req,res)=>{

       let id = req.params.id;
       
         
         db.Services.findOne({
             where:{id},
            
 
         }).then((response)=>{

           res.send(response);
         })
     });

 */
    
};