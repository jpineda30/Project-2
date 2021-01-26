const db = require("../models");

module.exports = function(app){

    app.post("/addAppointment",(req,res)=>{
        console.log(req.body);
        db.Appointment.create({




        }).then((response)=>{
                res.send(response);
        });
    });

    app.get("/appointments",(req,res)=>{

       // res.render("patients","")
        
        db.Patient.findAll({
            //where:{sex:true},
            attributes:["l"]

        }).then((patients)=>{
              
                
                let Patients = patients.map((obj)=>{
                    let patient = obj.dataValues;
                    return patient
                });

               
                res.render("patients",{Patients})
        });
        
    });

    app.get("/viewPatient/:id",(req,res)=>{

       let id = req.params.id;
       
         
         db.Patient.findOne({
             where:{id},
            
 
         }).then((response)=>{

           res.send(response);
         })
     });


    
};