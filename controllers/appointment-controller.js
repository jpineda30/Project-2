const db = require("../models");


module.exports = function(app){

    app.post("/addAppointment",(req,res)=>{
       
         //////////////

         let today = new Date();
         let dd = String(today.getDate()).padStart(2, '0');
         let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         let yyyy = today.getFullYear();
 
         today = yyyy + '-' + mm + '-' + dd;
 
         console.log("Fecha-------" + today + "HORA ----"+req.body.start);
 
         //////////////////////////////

        db.Appointment.create({
             date_start:req.body.start,
             date_end:req.body.end,
             patient_id:req.body.patient,
             service_id:req.body.service
             //date_day:today

        }).then((response)=>{

                res.send(response);
        });
        
    });
    
    app.get("/appointments",(req,res)=>{

        //////////////
         var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        //////////////////////////////

        db.Appointment.findAll({}).then((response)=>{

                let Appointments = response.map((obj)=>{
                    let app = obj.dataValues;
                return app
                });

            //console.log("Testing " + response);
            res.render("appointments",{Appointments})

        });
    });

    app.get("/appointments/:date",(req,res)=>{

        
        
        let date = req.params.date;
        console.log("RECIVED -----" + date);

        db.Appointment.findAll({
            where:{date_day:date}
        }).then((response)=>{

            let Appointments = response.map((obj)=>{
                let app = obj.dataValues;
                return app
            });
           
            res.json(Appointments);

        });
    });

 

 


    
};