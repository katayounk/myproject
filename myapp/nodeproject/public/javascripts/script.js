
 function myFunction() {
    document.getElementById("bt1").innerHTML = "clcik on shop";
  }




$(document).ready(function(){

    $("#appbtn").click(function(){
 
        document.location.href ="sh.html"
      });




      $("#kid1 img").mouseenter(function(){
        $(this).css("border","2px solid orange");
        $("#c1 h5").css("color"," gold");
        });
        $("#kid1 img").mouseleave(function(){
        $(this).css("border","2px solid brown");
        $("#c1 h5").css("color"," black");
          });
    
       

    
          $("#hidetog1  #hidetxt").hide();
          $("#hidetog1 button").click(function(){
            $("#hidetog1  #hidetxt").slideToggle();
          });
          
          $("#hidetog2  #hidetxt").hide();
          $("#hidetog2 button").click(function(){
            $("#hidetog2  #hidetxt").slideToggle();
          });
          
          $("#hidetog3  #hidetxt").hide();
          $("#hidetog3 button").click(function(){
            $("#hidetog3  #hidetxt").slideToggle();
          });



});
