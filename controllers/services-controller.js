const db = require("../models");

module.exports = function(app){

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

    /* app.get("/services",(req,res)=>{
        console.log("estamos aqui");
        db.Services.findAll({

            attributes:["sevice_id","service_name","service_cost","service_observations"],
    
        }).then((services)=>{
              
                
                let Services = services.map((obj)=>{
                    let service = obj.dataValues;
                    return service
                });

               
                res.render("services",{Services})
        });
        
    });
 */
    app.get("/viewServices/:id",(req,res)=>{

       let id = req.params.id;
       
         
         db.Services.findOne({
             where:{id},
            
 
         }).then((response)=>{

           res.send(response);
         })
     });


    
};