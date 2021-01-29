
$(function(){

    //create list 

    var patients;
    var services;

    let patientsList = $("#patientList");
    let servicesList = $("#serviceList");

    $.ajax("/patientsGet",{
        type:"GET",
        
       
    }).then((response)=>{

        patients = response;
        
        patients.forEach(patient => {
            
            let add = $("<option>");
            add.attr('id', patient.id);
            add.val(patient.first_name + " " + patient.last_name); 

            patientsList.append(add);
        });
        
    });

    $.ajax("/servicesGet",{
        type:"GET",
        
       
    }).then((response)=>{

        services = response;
        services.forEach(service => {
            
            let add = $("<option>");
            add.attr('id', service.id);
            add.val(service.service_name); 
            add.addClass("serclick");
            servicesList.append(add);
        });
        
    });

    $("#create-btn").on("click",function(){

        $("#createModal").css("display","block");
        let test = $("#currentDate").val();
        console.log(test);

    });

    $(".closeCreate, #cancelCreate").on("click",function(){

        $("#createModal").css("display","none");
        
    });

    $("#saveCreate").on("click",function(){

        let start =  $("#start").val();
        let end =  $("#end").val();

        let beginningTime = moment(start, 'h:mma');
        let endTime = moment(end, 'h:mma');

        let open = moment("08:00", 'h:mma');
        let close = moment("18:00", 'h:mma');


        let patientValue = $("#patient").val();
        let findValuep = $('#patientList [value="' + patientValue + '"]');
        let patient = findValuep[0].id;

        console.log(patient);

        let serviceValue = $("#service").val();
        let findValues = $('#serviceList [value="' + serviceValue + '"]');
        let service = findValues[0].id;
        


        let obj = {

            start:beginningTime._d,
            end:endTime._d,
            patient:patient,
            service:service
        };

        console.log(obj);
        if(!beginningTime.isBefore(endTime))
        {
            alert("The end date must be greater that the beginning time");
        }
        else if(beginningTime.isBefore(open) || beginningTime.isAfter(close))
        {
            alert("The start time should be between 8 and 6");
        }
        else{

            $.ajax("/addAppointment",{
                type:"POST",
                data:obj,
               
            }).then((response)=>{

                $("#createModal").css("display","none");
            });
        }

       
        

      
        
        
    });

    $(".edit-icon").on("click",function(){

        $("#editModal").css("display","block");
        

    });

    $(".closeEdit, #cancelEdit").on("click",function(){

        $("#editModal").css("display","none");
        
    });


    $("#currentDate").on("change",function(){

        let nextDate = $("#currentDate").val();
        console.log(nextDate);
      
       
       $.ajax("/appointments/"+ nextDate, {
            type:"GET"
        }).then((response)=>{

            console.log("success!------" + JSON.stringify(response));
           // window.location.replace(response);

        });
       
       

    });

  










});