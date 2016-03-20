GetItem();

function storeValue(Value) {
    if (Value) {
       console.log(Value);
      
       $("#todoList").append('<li class="list-group-item">'
      +'<div class="row">'
      +'<div class="col-md-1 com"><img src="img/signcheck.png" class="Makehand"></div>'
     +     '<div class="col-md-10"> <b>'+Value+'</b> </div>'
    +      '<div class="col-md-1 del"><img src="img/close.png"  class="Makehand"> </div>'
   +   '</div>'
  +'</li>');
    }
}
$(document).on("click","#todoList .col-md-1.com img, .input-group-addon img.Makehand",function()
{
  
  if($(this).hasClass("removeActive"))
  {
    $(this).removeClass("removeActive");
    $(this).parents(".col-md-1").next().removeClass("makeComplete");
  }
  else
  {
    $(this).addClass("removeActive");
    $(this).parents(".col-md-1").next().addClass("makeComplete");
    
  }
});
$(document).on("click","#todoList .col-md-1.del img",function()
{
    $(this).parents("li").remove();
});

$(document).on("mouseenter","#todoList .col-md-1.del img",function()
{
    $(this).addClass("removeActive");
});

$(document).on("mouseleave","#todoList .col-md-1.del img",function()
{
    $(this).removeClass("removeActive");
});

$(document).on("dblclick","#todoList .col-md-10",function()
{
  
  if($(this).hasClass('col-md-10'))
  {
    var txtValue=$(this).text();
    console.log(txtValue);
     $(this).html('<input type="text" class="form-control editText" value="'+txtValue
    +'" />'
    );
    
  }else 
  {
    $(this).parents(".col-md-10").html('<input type="text" class="form-control editText" value='
    +$(this).parents(".col-md-10").text()
    +' />'
    );
  }
   
});

$(document).on("keyup","#todoList .col-md-10 .editText",function(key)
{
  if(key.which==13)
  {
    console.log(key);
    $(this).parents(".col-md-10").html('<b>'+$(this).val()+'</b>');
       }
});

   $("#deleteAll").on("click",function()
{
  $("#todoList").html("");
});

  $("#pendingAll").on("click",function()
{
  $("#todoList li .col-md-1.com img").removeClass("removeActive");
});

$("#completeAll").on("click",function()
{
  $("#todoList li .col-md-1.com img").addClass("removeActive");
});

 $("#deleteCompleted").on("click",function()
{
  $("#todoList li .col-md-1.com img.removeActive").parents("li").remove();
});

 $("#SaveItems").on("click",function()
{
  SaveItem("#todoList .col-md-10");
  
});




   $("#txtValue").keyup(function(key){
       var item={};
       if(key.keyCode==13)
       {
        
         if($("#txtValue").val()){
           item.value=$("#txtValue").val();
           item.status=$("#txtValue").prev(".input-group-addon").find("img").hasClass("removeActive");
           console.log("hi2");
           apendItem(item);
           $("#txtValue").val("");
         }
       }
    });