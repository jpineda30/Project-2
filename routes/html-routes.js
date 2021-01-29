module.exports = function(app){

        app.get("/",(req,res)=>{
            res.render("login","");
        });

        app.get("/calendar",(req,res)=>{
            
            res.render("calendar","");
        });
    
        app.get("/profile",(req,res)=>{
            
            res.render("user","");
        });

        app.get("/treatments",(req,res)=>{
           
            res.render("treatments","");
        });

    
     

};