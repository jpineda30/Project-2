const db = require("../models");

module.exports = function(app){

    app.post("/addTreatmets_Services",(req,res)=>{
        console.log(req.body);
        db.Treatments_Services.create({

            service_name:req.body.service_name,
            service_cost:req.body.service_cost,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            


        }).then((response)=>{
                res.send(response);
        });
    });

    app.get("/treatments",(req,res)=>{

       // res.render("treatments","")
        
        db.Treatments_Services.findAll({
           
            attributes:["treatment_id","first_name","last_name","service_name","service_cost"]

        }).then((treatments_services)=>{
              
                
                let Treatments_Services = treatments_services.map((obj)=>{
                    let treatments_services = obj.dataValues;
                    return treatments_services
                });

               
                res.render("treatments_services",{Treatments_Services})
        });
        
    });

    app.get("/viewTreatment/:id",(req,res)=>{
        
       let id = req.params.id;
       
         
         db.Treatments_Services.findOne({
             where:{id},
            
 
         }).then((response)=>{

           res.send(response);
         })
     });


    
};