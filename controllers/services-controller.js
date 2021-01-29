const db = require("../models");

module.exports = function(app){

    app.post("/addService",(req,res)=>{
        console.log(req.body);
        db.Services.create({

            service_name:req.body.name,
            service_cost:req.body.cost,
            service_observations: req.body.observations,


        }).then((response)=>{
                res.send(response);
        });
    });

    app.get("/services",(req,res) => {

    console.log("estamos aqui");
    db.Services.findAll({


    }).then((services)=>{
          
            
            let Services = services.map((obj)=>{
                let service = obj.dataValues;
                return service
            });

           
            res.render("services",{Services})
    });
    
    });

    app.get("/servicesGet",(req,res) => {

        console.log("estamos aqui");
        db.Services.findAll({
    
    
        }).then((services)=>{
              
                
                let Services = services.map((obj)=>{
                    let service = obj.dataValues;
                    return service
                });
    
               
                res.send(Services);
        });
        
        });



    app.get("/viewService/:id",(req,res)=>{

       let id = req.params.id;
       
         
         db.Services.findOne({
             where:{id},
            
 
         }).then((response)=>{

           res.send(response);
         })
     });

     app.put("/updateService/:id",(req,res)=>{
        console.log(req.params.id)
         db.Services.update({

             service_name: req.body.name,
             service_cost:req.body.cost,
             service_observations:req.body.observations

         },{where:{id:req.params.id}}).then((response) => {
             res.send(response);
            }) .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                  res.send(err);
                });
     });





     app.delete("/deleteService/:id",(req,res)=>{

        db.Services.destroy({where:{id:req.params.id}}).then(()=>{
                
                res.status(200).end();
                
        }).catch((err)=>{
            console.log(err);
            res.status(500).send("we failed to delete for some reason")
        });

    });




    
};