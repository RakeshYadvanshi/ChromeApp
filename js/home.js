function storeValue(Value) {
    if (Value) {
       console.log(Value);
      
       $("#todoList").append('<li class="list-group-item">'
      +'<div class="row">'
     +     '<div class="col-md-11"><img src="img/signcheck.png" class="Makehand"> <b>'+Value+'<b> </div>'
    +      '<div class="col-md-1"><img src="img/close.png"  class="Makehand"> </div>'
   +   '</div>'
  +'</li>');
  
     
  
    }
}


$(document).on("click","#todoList .col-md-11 img",function()
{
  
  if($(this).hasClass("removeActive"))
  {
    $(this).removeClass("removeActive");
    $(this).next().removeClass("makeComplete");
  }
  else
  {
    $(this).addClass("removeActive");
    $(this).next().addClass("makeComplete");
    
  }
});
$(document).on("click","#todoList .col-md-1 img",function()
{
    $(this).parents("li").remove();
});

$(document).on("mouseenter","#todoList .col-md-1 img",function()
{
    $(this).addClass("removeActive");
});

$(document).on("mouseleave","#todoList .col-md-1 img",function()
{
    $(this).removeClass("removeActive");
});



   
   $("#txtValue").keyup(function(key){
       
       if(key.keyCode==13)
       {
           console.log("hi2");
           storeValue($("#txtValue").val());
           $("#txtValue").val("");
           
       }
    });