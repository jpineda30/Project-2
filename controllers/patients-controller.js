const db = require("../models");

module.exports = function(app){

    app.post("/addPatient",(req,res)=>{
        console.log(req.body);
        db.Patient.create({

            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            sex: true,
            age:req.body.age,
            previous_diseases:req.body.previous_diseases,
            current_medication:req.body.current_medication,
            patient_observations:req.body.patient_observations,
            allergies:req.body.allergies


        }).then((response)=>{
                res.send(response);
        });
    });

    app.get("/patients",(req,res)=>{

       // res.render("patients","")
        
        db.Patient.findAll({
            //where:{sex:true},
            attributes:["id","first_name","last_name","email"]

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