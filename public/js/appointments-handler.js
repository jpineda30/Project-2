$(function(){

         let today = new Date();
         let dd = String(today.getDate()).padStart(2, '0');
         let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         let yyyy = today.getFullYear();
 
         today = yyyy + '-' + mm + '-' + dd;

    //create list 

    var patients;
    var services;
    var target;

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

            ///rest

            let currDate = $("#currentDate").val();
    if(currDate == "")
    { $("#currentDate").val(today);


                $.ajax("/appointments/"+ today, {
                    type:"GET"
                }).then((response)=>{

                    $("#datesTable").empty();
                    
                // render table
                    renderDates(response);
                
                    

                });

   
    }
    else{}
            
        });
        
    });

    $("#create-btn").on("click",function(){

        $("#createModal").css("display","block");
        $("#errorMsg").text("");
        let test = $("#currentDate").val();
        
    });

    $(".closeCreate, #cancelCreate").on("click",function(){

        $("#createModal").css("display","none");

        
    });

    $("#saveCreate").on("click",function(){

        let start =  $("#start").val();
        let end =  $("#end").val();
        let dateT = $("#currentDate").val();

        let beginningTime = moment(start, 'h:mma');
        let endTime = moment(end, 'h:mma');
        
        $("#errorMsg").text("");
        if(beginningTime._i=="" || endTime._i == ""){
            $("#errorMsg").text("You must enter a start and end time");
         }
         else{
            if(!beginningTime.isBefore(endTime))
            {
                $("#errorMsg").text("The end date must be greater that the beginning time");
                //alert("The end date must be greater that the beginning time");
            }
            else if(beginningTime.isBefore(open) || beginningTime.isAfter(close))
            {
                //alert("The start time should be between 8 and 6");
                $("#errorMsg").text("The start time should be between 8 and 6");
            }
            else{
                if($("#service").val()=="" || $("#patient").val()=="")
                {
                    $("#errorMsg").text("You must select a patient and a service");
                }
                else
                {
                   
            
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
    
                    $("#errorMsg").text("");

                    validateDates(start,end,dateT,0).then((response)=>{
                        if(response===false)
                        {
                            let date = $("#currentDate").val();
                            $.ajax("/addAppointment/" + date,{
                                type:"POST",
                                data:obj,
                            
                            }).then((response)=>{
            
                                $("#createModal").css("display","none");
                                $.ajax("/appointments/"+date,{
                                    type:"GET"
                                }).
                                then((response)=>{
                                        renderDates(response);
                                })
                            });  
                        }
                    });
            
                   
    
                }
                
            }
         }  

        
         
      

       
        

      
        
        
    });

   function editIcon(){

    $("#errorMsgEdit").text("");    
    $.ajax("/appointments/dates/"+target,{
        type:"GET"

    }).then((response)=>{

        console.log(response);
        console.log(patients);
        let editPatient;
        let editService;

        editPatient = patients.filter((pat)=>{
            if(pat.id == response.patient_id)
            {return pat}
            
        });

        editService = services.filter((ser)=>{
            if(ser.id == response.service_id)
            {return ser}
            
        });

        

        let startEdit = moment(response.date_start).format("HH:mm");

        let endEdit = moment(response.date_end).format("HH:mm");

         $("#startEdit").val(startEdit);
         $("#endEdit").val(endEdit);
         $("#patientEdit").val(editPatient[0].first_name+" "+editPatient[0].last_name);
         $("#serviceEdit").val(editService[0].service_name);
         $("#editionDate").val(response.date_day);

        $("#editModal").css("display","block");
    })

        
        
        

    };

    function viewIcon(){

       
        $("#viewModal").css("display","block");
        

    };

    function deleteIcon(){

       
        $("#delete-prompt").css("display","block");
        

    };

    $("#saveEdit").on("click",function(){

        let start =  $("#startEdit").val();
        let end =  $("#endEdit").val();
        

        let beginningTime = moment(start, 'h:mma');
        let endTime = moment(end, 'h:mma');
        
            
         if(beginningTime._i=="" || endTime._i == ""){
            $("#errorMsgEdit").text("You must enter a start and end time");
         }
         else{
            if(!beginningTime.isBefore(endTime))
            {
                $("#errorMsgEdit").text("The end date must be greater that the beginning time");
                //alert("The end date must be greater that the beginning time");
            }
            else if(beginningTime.isBefore(open) || beginningTime.isAfter(close))
            {
                //alert("The start time should be between 8 and 6");
                $("#errorMsgEdit").text("The start time should be between 8 and 6");
            }
            else{
                if($("#serviceEdit").val()=="" || $("#patientEdit").val()=="")
                {
                    $("#errorMsgEdit").text("You must select a patient and a service");
                }
                else
                {
                  
            
                    let open = moment("08:00", 'h:mma');
                    let close = moment("18:00", 'h:mma');
            
            
                    let patientValue = $("#patientEdit").val();
                    let findValuep = $('#patientList [value="' + patientValue + '"]');
                    let patient = findValuep[0].id;
            
                    console.log(patient);
            
                    let serviceValue = $("#serviceEdit").val();
                    let findValues = $('#serviceList [value="' + serviceValue + '"]');
                    let service = findValues[0].id;
                    let = editionDate = $("#editionDate").val();
            
            
                    let obj = {
            
                        start:beginningTime._d,
                        end:endTime._d,
                        patient:patient,
                        service:service,
                        editDate:editionDate
                    };
    
                    $("#errorMsgEdit").text("");
                    let date = $("#editionDate").val();
                    
                    validateDates(start,end,date,target).then((response)=>{
                        if(!response)
                        {
                            $.ajax("/editAppointment/" + target,{
                                type:"PUT",
                                data:obj,
                            
                            }).then((response)=>{
                                
                                $.ajax("/appointments/"+date,{
                                    type:"GET"
                                }).
                                then((response)=>{
                                        renderDates(response);
                                        $("#editModal").css("display","none");
                                })
                            });
                        }
                    });
                   
    
                }
                
            }
         }   
      

       
        

      
        
        
    });

    $(".closeEdit, #cancelEdit").on("click",function(){

        $("#editModal").css("display","none");
        
    });

    $("#currentDate").on("change",function(){

        let nextDate = $("#currentDate").val();
        
      
       
       $.ajax("/appointments/"+ nextDate, {
            type:"GET"
        }).then((response)=>{

            $("#datesTable").empty();
            
           // render table
            renderDates(response);
           
               

        });
       
       

    });

//////
  
  $("#cancelDel, .closeDeletion, #deleteBtn").on("click",function(){
      $("#delete-prompt").css("display","none");
  });
  
  // #deleteBtn
  $("#deleteBtn").on("click",function(){
     
     $.ajax("/deleteAppointment/" + target,{
  
        type:"DELETE"
  
     }).then(()=>{
  
        let date = $("#currentDate").val();
        
        $.ajax("/appointments/"+date,{
            type:"GET"
        }).then((response)=>{
            renderDates(response);
        });
        
  
     });
  
  });
  
  

    function renderDates(getDates){
        $("#datesTable").empty();
        getDates.forEach(element => {

            let currentDates = $("#datesTable");
            let addApp = $("<tr>");
            let start = $("<th>");
                start.text(moment(element.date_start).format("HH:mm"));
                console.log();
                //moment(date + 'T' + time, "YYYY-MM-DDTHH:mm:ss")
            let end = $("<th>");
                end.text(moment(element.date_end).format("HH:mm"));
            let pat = $("<th>");
                let num1 = patients.filter((pat)=>{
                    if(pat.id == element.patient_id)
                    {return pat}
                    
                });
               // console.log("testing patient "+ num1[0].first_name+" "+num1[0].last_name)
            pat.text(num1[0].first_name+" "+num1[0].last_name);

            let serv = $("<th>");
                let ser1 = services.filter((ser)=>{
                    if(ser.id == element.service_id)
                    {return ser}
                    
                });
                serv.text(ser1[0].service_name);

            let actions = $("<th>");
            let wrapicons = $("<div>");
            wrapicons.addClass("level");
            /*let view = $("<i>");
            view.attr("data-id",element.id);
               
            view.addClass("fas fa-eye -mx-1 bview view-icon");
            view.on("click",()=>{
                target = view.attr("data-id"); 
                viewIcon()
            });*/
            let edit = $("<i>");
            edit.attr("data-id",element.id);
            
            edit.addClass("far fa-edit mx-1 bedit edit-icon");
            let del = $("<i>");
            del.attr("data-id",element.id);
            edit.on("click",()=>{
                    target = edit.attr("data-id"); 
                    editIcon();
                });
            del.addClass("fas fa-trash -mx-1 bdelete delete-icon");
            del.on("click",()=>{
                    target = del.attr("data-id"); 
                    deleteIcon();
                });

                //append
               // wrapicons.append(view);
                wrapicons.append(edit);
                wrapicons.append(del);
                actions.append(wrapicons);

                addApp.append(start);
                addApp.append(end);
                addApp.append(pat);
                addApp.append(serv);
                addApp.append(actions);

                currentDates.append(addApp);

                //$("#datesTable")
        });
    }


    async function validateDates(start,end,current,identifier){
        let errors = false;

        let test = await $.ajax("/appointments/"+current,{
            type:"GET"
        }).then((response)=>{
            
            if(identifier==0){

            }
            else
            {
                response = response.filter((date)=>{
                    if(date.id != identifier)
                    {return date}
                });
            }
            response.forEach((date)=>{


                let startSaved = moment(date.date_start).format("HH:mm");
                let endSaved = moment(date.date_end).format("HH:mm");
                let startCompare = moment(startSaved, 'h:mma');
                let endCompare = moment(endSaved, 'h:mma');
                let startCurrent = moment(start, 'h:mma');
                let endCurrent = moment(end, 'h:mma');

                        //current 8-11
                        //compare 10-12

                        //var val1 = moment.duration(endCurrent.diff(startTime));

                    if(endCurrent.isBefore(startCompare) && startCurrent.isBefore(startCompare))
                    {
                        if(!startCurrent.isAfter(endCompare)){
                            
                        }
   
                    }
                    else if(startCurrent.isAfter(endCompare) && endCurrent.isAfter(startCompare))
                    {

                        
                        
                    }
                    else{

                        if(endCurrent.minute() === startCompare.minute() && endCurrent.hour() === startCompare.hour())
                        {

                        }
                        else
                        {
                            if(startCurrent.minute() === endCompare.minute() && startCurrent.hour() === endCompare.hour() )
                            {

                            }
                            else
                            {
                                $("#errorMsgEdit").text("You already have an appointment in that time");
                                $("#errorMsg").text("You already have an appointment in that time");
                                 errors = true;
                                 return errors;
                            }
                        }

                        

                    }

                /*console.log("--------------------------")
                console.log(startCompare);
                console.log(endCompare);
                console.log(startCurrent);
                console.log(endCurrent);
                console.log(errors);
                console.log("--------------------------")*/

            })
        });

        return errors;

    }

  










});